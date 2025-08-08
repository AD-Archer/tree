/* eslint-env node */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, statSync } from 'fs'
// Importing the parser lazily inside handlers to avoid loading heavy deps on startup

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // Explicitly set the config file path
      config: './tailwind.config.js',
    }),
    {
      name: 'resume-api-dev',
      apply: 'serve',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          try {
            if (!req.url) return next()
            const url = new URL(req.url, 'http://localhost')
            const pathname = url.pathname
            const method = req.method || 'GET'

            // Serve /api/resume and metadata in dev
            if (pathname === '/api/resume') {
              if (method !== 'GET' && method !== 'HEAD') {
                res.statusCode = 405
                res.setHeader('Content-Type', 'application/json')
                return res.end(JSON.stringify({ error: 'Method not allowed' }))
              }
              const resumePath = join(__dirname, 'public', 'resume.pdf')
              const stats = statSync(resumePath)
              const format = url.searchParams.get('format')
              if (format === 'info' || format === 'metadata') {
                res.setHeader('Content-Type', 'application/json; charset=utf-8')
                const body = {
                  filename: 'resume.pdf',
                  size: stats.size,
                  lastModified: stats.mtime,
                  downloadUrl: `/api/resume`,
                  directUrl: `/resume.pdf`,
                  contentType: 'application/pdf',
                }
                return res.end(JSON.stringify(body))
              }

              res.setHeader('Content-Type', 'application/pdf')
              res.setHeader('Content-Disposition', 'inline; filename="resume.pdf"')
              res.setHeader('Cache-Control', 'no-store')
              res.setHeader('Content-Length', String(stats.size))
              res.setHeader('Access-Control-Allow-Origin', '*')
              if (method === 'HEAD') {
                res.statusCode = 200
                return res.end()
              }
              const buffer = readFileSync(resumePath)
              res.statusCode = 200
              return res.end(buffer)
            }

            // Serve /api/resume.json, /api/resume/json and their .json variants in dev
            if (
              pathname === '/api/resume.json' ||
              pathname === '/api/resume/json' ||
              pathname === '/api/resume.json.json' ||
              pathname === '/api/resume/json.json'
            ) {
              if (method !== 'GET' && method !== 'HEAD') {
                res.statusCode = 405
                res.setHeader('Content-Type', 'application/json')
                return res.end(JSON.stringify({ error: 'Method not allowed' }))
              }
              try {
                const { default: getResumeJson } = await import('./api/_lib/parseResume.js')
                const json = await getResumeJson()
                res.setHeader('Content-Type', 'application/json; charset=utf-8')
                res.setHeader('Cache-Control', 'no-store')
                res.setHeader('Access-Control-Allow-Origin', '*')
                if (method === 'HEAD') {
                  res.statusCode = 200
                  return res.end()
                }
                return res.end(JSON.stringify(json))
              } catch (err) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json; charset=utf-8')
                res.setHeader('Cache-Control', 'no-store')
                res.setHeader('Access-Control-Allow-Origin', '*')
                return res.end(
                  JSON.stringify({ error: 'Failed to parse resume', details: err && (err.message || String(err)) })
                )
              }
            }
          } catch {
            // Fall through to next handler on error
          }
          return next()
        })
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  publicDir: 'public',
})
