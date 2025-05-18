const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Create public directory
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Create a simple HTML file
const html = `<!DOCTYPE html>
<html>
<head>
  <title>Global Voting Platform</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      text-align: center;
      margin-top: 50px;
    }
    h1 { color: #333; }
    p { color: #666; }
  </style>
</head>
<body>
  <h1>Global Voting Platform</h1>
  <p>A location-based voting platform where users can vote on issues based on their location.</p>
  <p>Basic version is now running successfully on Glitch!</p>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'public', 'index.html'), html);

// Serve static files
app.use(express.static('public'));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 