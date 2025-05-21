'use client'
import { useState, useEffect } from 'react'
import { Spotify } from '@/components/icons/Spotify'

const BentoItemNowPlaying = () => {
  // Estado local para simular si está reproduciendo o no
  const [isPlaying, setIsPlaying] = useState(false)
  
  // Datos estáticos de la canción
  const songData = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    albumImageUrl: "/api/placeholder/300/300", // Imagen placeholder
    songUrl: "https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb",
  }

  // Opcional: Alternar isPlaying cada 30 segundos para simular cambios
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaying(prev => !prev)
    }, 30000)
    
    return () => clearInterval(interval)
  }, [])

  // Función para alternar manualmente el estado de reproducción
  const togglePlayingState = () => {
    setIsPlaying(prev => !prev)
  }

  return (
    <a
      href={songData.songUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative flex h-full items-center gap-x-6 rounded-3xl p-5 max-lg:p-6 md:max-lg:flex-col md:max-lg:items-start md:max-lg:justify-between'
    >
      {/* Spotify Icon Badge */}
      <div className='absolute right-3 top-3 text-zinc-500 transition-all duration-300 group-hover:text-green-400'>
        <Spotify className="h-5 w-5" />
      </div>
      
      {/* Album Art - Ahora es clickeable para cambiar el estado */}
      <div 
        className='aspect-square h-full rounded-xl bg-black p-3 max-lg:h-3/5 max-md:min-w-24'
        onClick={(e) => {
          e.preventDefault() // Prevenir la navegación del enlace principal
          togglePlayingState()
        }}
      >
        <div className='relative'>
          <img
            src={songData.albumImageUrl}
            alt='Album Cover'
            className={`absolute aspect-square rounded-full ${
              isPlaying ? 'animate-[spin_5s_linear_infinite]' : ''
            }`}
          />
        </div>
      </div>
      
      {/* Song Info */}
      <div className='w-full space-y-1 overflow-hidden tracking-wide'>
        <p className='text-sm text-slate-400'>
          {isPlaying ? 'Now playing' : 'Last played'}
        </p>
        <div className='items-center gap-x-4 space-y-1 md:max-lg:flex'>
          <p className='max-w-full flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap font-medium'>
            {songData.title}
          </p>
          <p className='overflow-hidden text-ellipsis whitespace-nowrap text-sm uppercase text-slate-400'>
            {songData.artist}
          </p>
        </div>
      </div>
    </a>
  )
}

export default BentoItemNowPlaying