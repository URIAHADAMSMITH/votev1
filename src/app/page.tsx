'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the map component with no SSR
const MapComponent = dynamic(
  () => import('@/components/Map'),
  { ssr: false }
)

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 z-10 w-full bg-black bg-opacity-70 p-4 text-white">
        <h1 className="text-2xl font-bold text-center">Global Voting Platform</h1>
        <p className="text-center">Zoom in to see local polls. Zoom out to see global issues.</p>
      </div>
      {isClient && <MapComponent />}
    </main>
  )
} 