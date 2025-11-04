/**
 * Static File Server for DOT Compliance Demo
 * 
 * This server serves the static HTML website from the public/ directory.
 * Uses only built-in Node.js modules - no external dependencies required.
 */

import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(fileURLToPath(import.meta.url), '..', '..');

const PORT = parseInt(process.env.PORT || '5000', 10);
const PUBLIC_DIR = join(__dirname, 'public');

// MIME types
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webmanifest': 'application/manifest+json'
};

const server = createServer(async (req, res) => {
  try {
    let filePath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
    
    // Security: prevent directory traversal
    if (filePath.includes('..')) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('403 Forbidden');
      return;
    }
    
    const fullPath = join(PUBLIC_DIR, filePath);
    
    try {
      // Check if path is a directory
      const stats = await stat(fullPath);
      if (stats.isDirectory()) {
        const indexPath = join(fullPath, 'index.html');
        const data = await readFile(indexPath);
        res.writeHead(200, { 
          'Content-Type': 'text/html',
          'Cache-Control': 'public, max-age=3600'
        });
        res.end(data);
        return;
      }
      
      // Serve file
      const data = await readFile(fullPath);
      const ext = extname(filePath);
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      const cacheControl = ext === '.html' ? 'public, max-age=3600' : 'public, max-age=31536000';
      
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': cacheControl
      });
      res.end(data);
      
    } catch (err) {
      if (err.code === 'ENOENT') {
        // Try index.html for directory-style URLs
        if (!extname(filePath)) {
          try {
            const indexPath = join(fullPath, 'index.html');
            const data = await readFile(indexPath);
            res.writeHead(200, { 
              'Content-Type': 'text/html',
              'Cache-Control': 'public, max-age=3600'
            });
            res.end(data);
            return;
          } catch {}
        }
        
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>The requested file was not found.</p>');
      } else {
        throw err;
      }
    }
    
  } catch (error) {
    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('\n' + '='.repeat(70));
  console.log('🌐 DOT Compliance Demo - Static Website Server');
  console.log('='.repeat(70));
  console.log(`\n✓ Server running on http://0.0.0.0:${PORT}`);
  console.log(`✓ Serving static files from: ${PUBLIC_DIR}`);
  console.log('\n📄 Available pages:');
  console.log('   • Homepage:           http://0.0.0.0:' + PORT + '/');
  console.log('   • New USDOT:          http://0.0.0.0:' + PORT + '/services/new-usdot.html');
  console.log('   • BOC-3:              http://0.0.0.0:' + PORT + '/services/boc-3.html');
  console.log('   • Clearinghouse:      http://0.0.0.0:' + PORT + '/services/clearinghouse.html');
  console.log('   • Hazmat:             http://0.0.0.0:' + PORT + '/services/hazmat.html');
  console.log('   • Safety Training:    http://0.0.0.0:' + PORT + '/services/trainings.html');
  console.log('   • Blog Post 1:        http://0.0.0.0:' + PORT + '/blog/blog-post-1.html');
  console.log('   • Blog Post 2:        http://0.0.0.0:' + PORT + '/blog/blog-post-2.html');
  console.log('   • Blog Post 3:        http://0.0.0.0:' + PORT + '/blog/blog-post-3.html');
  console.log('   • SEO Checklist:      http://0.0.0.0:' + PORT + '/seo-checklist.html');
  console.log('   • Sitemap:            http://0.0.0.0:' + PORT + '/sitemap.xml');
  console.log('   • Robots.txt:         http://0.0.0.0:' + PORT + '/robots.txt');
  console.log('\n💡 This is a static HTML website (not a React app)');
  console.log('   All content is in the public/ directory');
  console.log('   Run: node server/index.js (uses only built-in Node.js modules)');
  console.log('\n' + '='.repeat(70) + '\n');
});

export default server;