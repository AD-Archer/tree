# Resume API Documentation

This API provides endpoints to access and retrieve resume information.

> ✅ **API Status**: Tested and working! Successfully serves resume PDF files.

## Endpoints

### GET /api/resume
**Description**: Downloads the resume PDF file directly
**Response**: PDF file (application/pdf)
**Headers**: 
- Content-Type: application/pdf
- Content-Disposition: inline; filename="resume.pdf"

**Example Usage**:
```bash
# Using get command (available in n8n environments)
get http://yourdomain.com/api/resume --output resume.pdf

# Or download without specifying output file
get http://yourdomain.com/api/resume

# Local development testing
get http://localhost:5173/api/resume --output resume.pdf

# Using curl (if available)
curl -O "https://yourdomain.com/api/resume"

# Using wget (if available)
wget "https://yourdomain.com/api/resume" -O resume.pdf
```

### GET /api/resume?format=info
**Description**: Returns metadata about the resume file
**Response**: JSON object with file information

**Example Response**:
```json
{
  "filename": "resume.pdf",
  "size": 245760,
  "lastModified": "2025-01-15T10:30:00.000Z",
  "downloadUrl": "/api/resume",
  "directUrl": "/resume.pdf",
  "contentType": "application/pdf"
}
```

**Example Usage**:
```bash
# Get resume metadata
curl "https://yourdomain.com/api/resume?format=info"
```

### GET /resume
**Description**: Alias endpoint that redirects to /api/resume
**Response**: PDF file (application/pdf)

## Usage with n8n

You can use these endpoints in n8n workflows using HTTP Request nodes:

### 1. Download Resume PDF
**HTTP Request Node Configuration**:
- **Method**: GET
- **URL**: `https://yourdomain.com/api/resume`
- **Response Format**: File/Binary
- **Binary Property Name**: `data` (default)

The PDF will be available as binary data that you can:
- Save to cloud storage (Google Drive, Dropbox, AWS S3)
- Email as attachment
- Process with other nodes
- Forward to webhooks

### 2. Get Resume Metadata
**HTTP Request Node Configuration**:
- **Method**: GET  
- **URL**: `https://yourdomain.com/api/resume?format=info`
- **Response Format**: JSON

This returns file information like size, last modified date, etc.

### 3. Local Development Testing
For testing during development:
- **URL**: `http://localhost:5173/api/resume`
- Same configuration as above

### 4. Example n8n Workflow
1. **HTTP Request** → Get resume binary data
2. **Google Drive** → Save file to cloud storage
3. **Email** → Send notification with download link

## CORS Support

All API endpoints include CORS headers, making them accessible from web applications and n8n workflows.

## Error Handling

- **404**: Resume file not found
- **405**: Method not allowed (only GET is supported)
- **500**: Internal server error
