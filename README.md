# Global Voting Platform

A simple, static demo of a location-based voting platform.

## How to Run

This project is hosted on Glitch. The project automatically runs when you refresh the Glitch page.

If it doesn't start automatically, click the Terminal button and type:
```
refresh
```

Then:
```
npm start
```

## Project Structure

- `index.html` - The main HTML file with the UI
- `index.js` - A simple Express server to serve the static files
- `package.json` - Project dependencies and configuration

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