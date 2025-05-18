const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Create a simple HTML page with leaflet map
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Global Voting Platform</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      font-family: Arial, sans-serif;
    }
    
    #header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 10px;
      z-index: 1000;
      text-align: center;
    }
    
    #map {
      height: 100vh;
      width: 100%;
    }
    
    #polls-sidebar {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: white;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      max-width: 300px;
      max-height: 400px;
      overflow-y: auto;
      z-index: 1000;
    }
    
    .poll-item {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    
    .poll-title {
      font-weight: bold;
    }
    
    .poll-description {
      font-size: 0.9em;
      color: #555;
    }
    
    .vote-buttons {
      margin-top: 5px;
    }
    
    .vote-yes {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
      margin-right: 5px;
    }
    
    .vote-no {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="header">
    <h1>Global Voting Platform</h1>
    <p>Zoom in to see local polls. Zoom out to see global issues.</p>
  </div>
  
  <div id="map"></div>
  
  <div id="polls-sidebar">
    <h2>Current Polls</h2>
    <div id="polls-list"></div>
  </div>

  <script>
    // Initialize the map
    const map = L.map('map').setView([20, 0], 2);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Sample poll data
    const polls = [
      { id: 1, title: 'Global Climate Action', description: 'Should countries commit to net-zero emissions by 2050?', lat: 0, lng: 0, zoom: 2 },
      { id: 2, title: 'US Healthcare Reform', description: 'Do you support universal healthcare in the United States?', lat: 39.8, lng: -98.5, zoom: 4 },
      { id: 3, title: 'EU Digital Policies', description: 'Should the EU strengthen data privacy regulations?', lat: 50.8, lng: 10.4, zoom: 4 },
      { id: 4, title: 'New York Transit Funding', description: 'Should NYC increase funding for public transportation?', lat: 40.7, lng: -74.0, zoom: 10 }
    ];
    
    // Create markers for each poll
    polls.forEach(poll => {
      const marker = L.marker([poll.lat, poll.lng]).addTo(map);
      
      marker.bindPopup(\`
        <div>
          <h3>\${poll.title}</h3>
          <p>\${poll.description}</p>
          <div>
            <button class="vote-yes" onclick="alert('Vote recorded: Yes')">Yes</button>
            <button class="vote-no" onclick="alert('Vote recorded: No')">No</button>
          </div>
        </div>
      \`);
    });
    
    // Update polls sidebar based on current view
    function updatePolls() {
      const bounds = map.getBounds();
      const zoom = map.getZoom();
      
      const visiblePolls = polls.filter(poll => {
        const isInBounds = bounds.contains([poll.lat, poll.lng]);
        const isRelevantZoom = zoom >= poll.zoom - 2;
        return isInBounds && isRelevantZoom;
      });
      
      const pollsList = document.getElementById('polls-list');
      
      if (visiblePolls.length === 0) {
        pollsList.innerHTML = '<p>No polls available in this area</p>';
        return;
      }
      
      pollsList.innerHTML = '';
      
      visiblePolls.forEach(poll => {
        const pollItem = document.createElement('div');
        pollItem.className = 'poll-item';
        
        pollItem.innerHTML = \`
          <div class="poll-title">\${poll.title}</div>
          <div class="poll-description">\${poll.description}</div>
        \`;
        
        pollsList.appendChild(pollItem);
      });
    }
    
    // Update polls on map move or zoom
    map.on('moveend', updatePolls);
    map.on('zoomend', updatePolls);
    
    // Initial update
    updatePolls();
  </script>
</body>
</html>
`;

// Create the public directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Write the index.html file
fs.writeFileSync(path.join('public', 'index.html'), htmlContent);

// Route all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 