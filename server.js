const express = require('express');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Set NODE_ENV if not already set
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Get port from environment or use 3000 as default
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Debug logging for requests
  server.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // Serve static files from the public directory
  server.use(express.static('public'));

  // Let Next.js handle all other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 Ready on http://localhost:${port}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
  });
}).catch(err => {
  console.error('Error starting server:', err);
  process.exit(1);
}); 