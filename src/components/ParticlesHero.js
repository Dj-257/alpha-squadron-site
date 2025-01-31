import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

const ParticlesHero = function() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      const effect = BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x212930,
        color1: 0xca212d,
        color2: 0xfaf4c5,
        quantity: 4,
        colorMode: "lerpGradient",
        wingSpan: 20.00,
        speedLimit: 6.00,
        separation: 82.00,
        alignment: 56.00,
        cohesion: 61.00,
        THREE: THREE
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className='relative h-screen w-full'>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
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
  );
}

export default ParticlesHero;