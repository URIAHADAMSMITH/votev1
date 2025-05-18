# Global Voting Platform

A simplified static version of the location-based voting platform.

## About

This is a minimal version of the voting platform using plain HTML, CSS, and JavaScript with a simple Express server.

## How to Run

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```

3. Open http://localhost:3000 in your browser

## Structure

- `public/index.html` - The main HTML page with embedded styles and JavaScript
- `index.js` - A simple Express server to serve the static files

## Features

- Interactive world map with Leaflet.js
- Dynamic poll loading based on map zoom and location
- Vote on polls directly from the map interface
- Responsive design that works on both desktop and mobile

## Local Development

To run this project locally:

```bash
npm install
npm run dev
```

## Project Structure

```
/
  /public
    /images
      - marker-icon.png
      - marker-shadow.png
  /src
    /app
      - globals.css
      - layout.tsx
      - page.tsx
    /components
      - Map.tsx
    /lib
      - api.ts
  - package.json
  - server.js
  - next.config.js
  - ...
```

## Future Enhancements

- User authentication
- Poll creation interface
- Vote analytics and visualization
- Real-time updates with WebSockets
- Enhanced filtering of polls by category

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 