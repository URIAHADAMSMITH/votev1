# Global Voting Platform

A location-based voting platform that allows users to view and participate in polls based on geographical location. As users zoom in on the map, they see more localized polls specific to that region.

## Glitch Setup

This project is optimized to run on [Glitch](https://glitch.com):

1. Click "New Project" in Glitch
2. Select "Import from GitHub"  
3. Paste: `https://github.com/URIAHADAMSMITH/votev1`
4. Wait for the project to build and start automatically

If the project doesn't start automatically:
- In the Glitch console, run: `bash start.sh`

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