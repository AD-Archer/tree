/* eslint-env node */
import { readFileSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url'

export default function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { format } = req.query;

  try {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const resumePath = join(__dirname, '..', 'public', 'resume.pdf');
    
    // Check if file exists and get stats
    const stats = statSync(resumePath);
    
    if (format === 'info' || format === 'metadata') {
      // Return metadata about the resume
      return res.status(200).json({
        filename: 'resume.pdf',
        size: stats.size,
        lastModified: stats.mtime,
        downloadUrl: `/api/resume`,
        directUrl: `/resume.pdf`,
        contentType: 'application/pdf'
      });
    }

    // Default behavior: serve the PDF file
  const resumeBuffer = readFileSync(resumePath);

    // Set appropriate headers
  res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="resume.pdf"');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
  res.setHeader('Content-Length', String(stats.size));
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Send the PDF file
  if (req.method === 'HEAD') return res.status(200).end();
  res.status(200).send(resumeBuffer);
  } catch (error) {
    console.error('Error serving resume:', error);
    res.status(404).json({ error: 'Resume not found' });
  }
}
