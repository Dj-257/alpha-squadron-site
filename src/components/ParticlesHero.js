import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'

const ParticlesHero = function() {
  const settings = {
    particle: {
      particleCount: 100,
      color: "#FAF4C5",
      minSize: 2,
      maxSize: 4
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000
    }
  }

  return (
    <div className='relative h-screen w-full'>
      <ParticleBackground settings={settings} className="absolute inset-0"/>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <img 
          src="/img/logo.png" 
          alt="Logo" 
          className="w-60 h-60 mb-4"
        />
        <h1 className="text-5xl drop-shadow-lg tagline">
          ALPHA MANTRA
        </h1>
      </div>
    </div>
  )
}

export default ParticlesHero;