/* eslint-env node */

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
  const { default: getResumeJson } = await import('../../_lib/parseResume.js')
  const json = await getResumeJson()
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.setHeader('Cache-Control', 'public, max-age=600')
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.method === 'HEAD') return res.status(200).end()
    return res.status(200).json(json)
  } catch (err) {
    console.error('Error in /api/resume/json:', err)
    return res.status(500).json({ error: 'Failed to parse resume' })
  }
}
