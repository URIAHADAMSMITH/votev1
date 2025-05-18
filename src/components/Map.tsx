'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { fetchPolls } from '@/lib/api'

// Fix the marker icon issue in Leaflet
const defaultIcon = L.icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

L.Marker.prototype.options.icon = defaultIcon

// Mock poll data (replace with actual API calls)
const mockPolls = [
  { id: 1, title: 'Global Climate Action', description: 'Should countries commit to net-zero emissions by 2050?', lat: 0, lng: 0, zoom: 2 },
  { id: 2, title: 'US Healthcare Reform', description: 'Do you support universal healthcare in the United States?', lat: 39.8, lng: -98.5, zoom: 4 },
  { id: 3, title: 'EU Digital Policies', description: 'Should the EU strengthen data privacy regulations?', lat: 50.8, lng: 10.4, zoom: 4 },
  { id: 4, title: 'New York Transit Funding', description: 'Should NYC increase funding for public transportation?', lat: 40.7, lng: -74.0, zoom: 10 },
]

function MapEvents({ setCurrentPolls }: { setCurrentPolls: Function }) {
  const map = useMapEvents({
    zoomend: () => {
      const zoom = map.getZoom()
      const center = map.getCenter()
      
      // Filter polls based on current zoom level and map bounds
      const bounds = map.getBounds()
      const visiblePolls = mockPolls.filter(poll => {
        const isInBounds = bounds.contains([poll.lat, poll.lng])
        const isRelevantZoom = zoom >= poll.zoom - 2
        return isInBounds && isRelevantZoom
      })
      
      setCurrentPolls(visiblePolls)
    },
    moveend: () => {
      const zoom = map.getZoom()
      const bounds = map.getBounds()
      
      const visiblePolls = mockPolls.filter(poll => {
        const isInBounds = bounds.contains([poll.lat, poll.lng])
        const isRelevantZoom = zoom >= poll.zoom - 2
        return isInBounds && isRelevantZoom
      })
      
      setCurrentPolls(visiblePolls)
    }
  })
  
  return null
}

const Map = () => {
  const [currentPolls, setCurrentPolls] = useState<Array<any>>(mockPolls)
  
  // For production, replace with real API calls
  useEffect(() => {
    // Initial load of global polls
    setCurrentPolls(mockPolls.filter(poll => poll.zoom <= 2))
    
    // Create directory for Leaflet images
    const createImageDir = async () => {
      try {
        // In a real app, you would ensure these images exist
        console.log('Leaflet marker images should be placed in /public/images/')
      } catch (error) {
        console.error('Error setting up Leaflet images:', error)
      }
    }
    
    createImageDir()
  }, [])
  
  return (
    <div className="h-screen w-full">
      <MapContainer 
        center={[20, 0]} 
        zoom={2} 
        scrollWheelZoom={true} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapEvents setCurrentPolls={setCurrentPolls} />
        
        {currentPolls.map(poll => (
          <Marker key={poll.id} position={[poll.lat, poll.lng]}>
            <Popup>
              <div>
                <h3 className="font-bold">{poll.title}</h3>
                <p>{poll.description}</p>
                <div className="mt-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Yes</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">No</button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <div className="fixed bottom-4 right-4 z-10 bg-white p-4 rounded-lg shadow-lg max-w-md max-h-96 overflow-y-auto">
        <h2 className="text-xl font-bold mb-2">Current Polls</h2>
        {currentPolls.length === 0 ? (
          <p>No polls available in this area</p>
        ) : (
          <ul>
            {currentPolls.map(poll => (
              <li key={poll.id} className="mb-2 p-2 border-b">
                <h3 className="font-bold">{poll.title}</h3>
                <p className="text-sm">{poll.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Map 