/* eslint-env node */
import { readFileSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
// Lazily import pdf-parse inside the function to avoid side-effects at module load

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function parseResumeText(text) {
  // Normalize whitespace
  let normalized = (text || '')
    .replace(/\r/g, '')
    .replace(/\t/g, ' ')
    .replace(/\u00a0/g, ' ') // nbsp

  // Insert line breaks before/after common headings, even when concatenated
  const headings = [
    'Summary',
    'Experience',
    'Work Experience',
    'Professional Experience',
    'Education',
    'Projects',
    'Project',
    'Technical Skills',
    'Skills',
    'Technologies',
    'Certifications',
    'Contact',
    'Links',
  ]
  for (const h of headings) {
    const reWord = new RegExp(`(?:^|\\n|\\s)(${h})(?=\\b|[A-Z]|:)`, 'g')
    normalized = normalized.replace(reWord, (m, g1) => `\n${g1}`)
    // Also ensure a break right after the heading when it's glued to the next word
    const reAfter = new RegExp(`(${h})(?=[A-Z])`, 'g')
    normalized = normalized.replace(reAfter, `$1\n`)
  }

  const lines = normalized
    .split(/\n+/)
    .map(l => l.trim())
    .filter(Boolean)

  const sections = {}
  let current = 'summary'
  for (const raw of lines) {
    const line = raw.trim()
    const lower = line.toLowerCase()
    if (/^(summary)\b/.test(lower)) current = 'summary'
    else if (/^(experience|work experience|professional experience)\b/.test(lower)) current = 'experience'
    else if (/^(education)\b/.test(lower)) current = 'education'
    else if (/^(projects?)\b/.test(lower)) current = 'projects'
    else if (/^(technical skills|skills?|technologies?)\b/.test(lower)) current = 'skills'
    else if (/^(certifications?)\b/.test(lower)) current = 'certifications'
    else if (/^(contact|links?)\b/.test(lower)) current = 'contact'

    if (!sections[current]) sections[current] = []
    sections[current].push(line)
  }

  // Extract skills: collect from skills section only, split by commas, bullets, pipes, or multiple spaces
  const skillsText = (sections.skills || []).join(' ')
  const skills = skillsText
    .split(/[,•\u2022|]+|\s{2,}/)
    .map(s => s.trim())
    .filter(s => s && s.length < 60)

  return {
    summary: (sections.summary || [])
      .filter(l => !/^(summary)\b/i.test(l))
      .join('\n')
      .trim(),
    skills: Array.from(new Set(skills)),
    sections,
  }
}

export async function getResumeJson() {
  const resumePath = join(__dirname, '..', '..', 'public', 'resume.pdf')
  const stats = statSync(resumePath)
  const dataBuffer = readFileSync(resumePath)
  let parsedText = ''
  try {
    // Dynamic import to prevent executing pdf-parse during server startup or bundling
    const { default: pdf } = await import('pdf-parse')
    const parsed = await pdf(dataBuffer)
    parsedText = parsed.text || ''
  } catch {
    // Try a plaintext fallback if available in public/
    const publicDir = join(__dirname, '..', '..', 'public')
    const candidates = ['resume.txt', 'resume.md']
    for (const fname of candidates) {
      try {
        const altPath = join(publicDir, fname)
        const content = readFileSync(altPath, 'utf8')
        if (content && content.trim()) {
          parsedText = content
          break
        }
      } catch {
        // continue trying next candidate
      }
    }
    // If still nothing, return a metadata-only fallback
    if (!parsedText) {
      return {
        meta: {
          generatedAt: new Date().toISOString(),
          filename: 'resume.pdf',
          size: stats.size,
          lastModified: stats.mtime,
          source: '/resume.pdf',
          contentType: 'application/pdf',
          note: 'pdf-parse unavailable; returning metadata-only in dev',
        },
        summary: '',
        skills: [],
        sections: {},
      }
    }
  }
  const parsedBody = parseResumeText(parsedText)

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      filename: 'resume.pdf',
      size: stats.size,
      lastModified: stats.mtime,
      source: '/resume.pdf',
      contentType: 'application/pdf',
    },
    ...parsedBody,
  }
}

export default getResumeJson
