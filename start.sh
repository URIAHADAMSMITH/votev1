#!/bin/bash
# Install dependencies only when needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm ci --only=production
fi

# Build the Next.js app
echo "Building Next.js app..."
npm run build

# Start the server
echo "Starting server..."
npm start 