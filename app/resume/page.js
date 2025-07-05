"use client"
import React from 'react'
 import  Particles  from '@/app/components/background';
const Resume = () => {
  return (
    <div className='relative project min-h-screen bg-black text-white bg-gradient-to-b from-white/30 to-transparent flex items-center'>
           <div style={{ width: '100%', height: '100vh', position: 'absolute'}}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={700}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
     <div className="md:w-1/2 md:h-[80%] mx-auto z-10">
     <img src="resume.png" alt="resume pic" className='md:w-full md:h-full  h-[70vh]' />
     </div>
    </div>
  )
}

export default Resume
