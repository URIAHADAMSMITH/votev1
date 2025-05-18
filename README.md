# Global Voting Platform

A location-based voting platform that allows users to view and participate in polls based on geographical location. As users zoom in on the map, they see more localized polls specific to that region.

## Features

- Interactive world map with Leaflet.js
- Dynamic poll loading based on map zoom and location
- Vote on polls directly from the map interface
- Responsive design that works on both desktop and mobile

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/votev1.git
cd votev1
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Important Note About Leaflet Markers

For the map markers to display correctly, you need to add the marker icon images to the `/public/images/` directory. If you're seeing marker icon issues, download the following files from the Leaflet distribution and place them in this directory:

- marker-icon.png
- marker-shadow.png

## Project Structure

```
/votev1
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
  - tsconfig.json
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