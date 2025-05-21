import 'leaflet/dist/leaflet.css'

import { Map as MapLeaflet, type ZoomPanOptions } from 'leaflet'
import { useRef, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import MinusIcon from 'lucide-static/icons/minus.svg'
import PlusIcon from 'lucide-static/icons/plus.svg'

const LATITUDE = -6.147
const LONGITUDE = 106.85

const ZOOM_STEP = 2
const MAX_ZOOM = 12
const MIN_ZOOM = 8
const MAP_URL = '/api/map/{z}/{x}/{y}.png'

const zoomOptions: ZoomPanOptions = {
  animate: true,
  duration: 0.5,
  easeLinearity: 0.25
}

interface ZoomButtonProps extends React.HTMLProps<HTMLButtonElement> {
  hide?: boolean
  children: React.ReactNode
}

const ZoomButton = ({ onClick, children, className, hide }: ZoomButtonProps) => (
  <button
    onClick={onClick}
    className={`absolute size-10 rounded-full bg-zinc-950 text-3xl leading-none outline outline-slate-700
      scale-100 transition-all duration-300 hover:outline-4
      flex items-center justify-center
      ${hide ? 'scale-0' : ''} ${className ?? ''}`}
    aria-hidden={hide}
    tabIndex={hide ? -1 : 0}
  >
    {children}
  </button>
)

interface Props {
  className?: string
}

const BentoItemMapLocation = ({ className }: Props) => {
  const mapRef = useRef<MapLeaflet>(null)
  const [currentZoom, setCurrentZoom] = useState(
    mapRef.current?.getZoom() ?? MAX_ZOOM
  )

  const zoomIn = () => {
    setCurrentZoom(prev => {
      const newZoom = prev + ZOOM_STEP
      mapRef.current?.setZoom(newZoom, zoomOptions)
      return newZoom
    })
  }

  const zoomOut = () => {
    setCurrentZoom(prev => {
      const newZoom = prev - ZOOM_STEP
      mapRef.current?.setZoom(newZoom, zoomOptions)
      return newZoom
    })
  }

  return (
    <div className='group h-full'>
      <MapContainer
        ref={mapRef}
        zoom={MAX_ZOOM}
        center={[LATITUDE, LONGITUDE]}
        dragging={false}
        touchZoom={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
        attributionControl={false}
        className={`brightness-[0.64] -hue-rotate-[24deg] saturate-[0.86] h-full min-h-full w-full ${className ?? ''}`}
        trackResize
      >
        <TileLayer
          url={MAP_URL}
          zoomOffset={-1}
          minZoom={1}
          tileSize={512}
          eventHandlers={{
            tileloadstart: (event) => {
              event.tile.setAttribute('loading', 'lazy')
            }
          }}
        />
      </MapContainer>

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='relative size-16'>
          <div className='absolute size-full animate-ping rounded-full bg-emerald-300/20 opacity-65 blur-sm'></div>
          <div className='drop-shadow-green size-full rounded-full bg-emerald-400/30'></div>
        </div>
      </div>

      <ZoomButton
        onClick={zoomOut}
        className='bottom-4 left-4'
        hide={currentZoom <= MIN_ZOOM}
      >
        <MinusIcon class='size-4' />
      </ZoomButton>

      <ZoomButton
        onClick={zoomIn}
        className='bottom-4 right-4'
        hide={currentZoom >= MAX_ZOOM}
      >
        <PlusIcon class='size-4' />
      </ZoomButton>
    </div>
  )
}

export default BentoItemMapLocation
