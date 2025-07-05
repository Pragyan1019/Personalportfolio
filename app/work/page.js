"use client"
import React from 'react'
import { motion, scale, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
           import Flippablecards from '../components/Flippablecards';

 import  Particles  from '@/app/components/background';


const Page = () => {
  
  return (
    <>
    
     <div className="relative md:min-h-screen h-[95vh] z-30">
      <div className="absolute w-[100%] h-[100%]  bg-black bg-gradient-to-b from-white/30 to-transparent -z-20"></div>
           <div style={{ width: '100%', height: '100vh', position: 'absolute',zIndex:-10}}>
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
   <nav className='md:w-[70%] mx-auto md:px-3 flex  pb-2 text-xl md:text-2xl items-center md:justify-between z-50 '>
  <Link href="/">  <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          transition={{
               duration: 1,
              ease: "easeOut",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center p-4 text-4xl font-semibold z-50"
        >
          <svg 
  width="60" 
  height="50" 
  viewBox="0 0 100 100" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg">
  
  <g transform="scale(3.8) translate(8, -2)" fill="#FFFFFF">
    <path d="M8.36 5 q2.38 0 3.84 1.37 t1.46 3.65 t-1.44 3.64 t-3.86 1.36 l-3.82 0 l0 4.08 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -6.2 q0 -0.28 0.21 -0.49 t0.49 -0.21 l5.92 0 q1.34 0 1.92 -0.58 q0.58 -0.52 0.58 -1.58 t-0.6 -1.63 t-1.9 -0.57 l-5.92 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.04 0 z"></path>
  </g>
</svg>
        </motion.h1> </Link> <motion.ul 
        initial="hidden" animate="visible"
        
        className='flex gap-9'>
      <Link href="/">     <motion.li 
        initial="hidden" animate="visible" className='font-semibold cursor-pointer hover:scale-120 transition-all ease-in-out z-50'>Home</motion.li></Link> 
       <Link href="/about">      <motion.li 
        initial="hidden" animate="visible" className='font-semibold cursor-pointer hover:scale-120 transition-all ease-in-out z-50'>About</motion.li></Link>
        <Link href="/services">     <motion.li 
        initial="hidden" animate="visible" className='font-semibold cursor-pointer hover:scale-120 transition-all ease-in-out z-50'>Service</motion.li></Link>
        </motion.ul>
    
  
        </nav>
        <div className="cards  md:grid-cols-3 md:grid-rows-2   w-[90%] p-2 grid gap-x-4 gap-y-3 mx-auto my-auto ">
          <motion.div
                      className=" overflow-hidden grid grid-cols-1 z-10">
                        <Flippablecards
                         title="Question Bank - NEB Exam Platform"
            frontImage="project1.png"
            description="NEB students lacked a central platform for targeted exam practice, forcing them to sift through disorganized materials. This project closes that gap by providing a curated database of high-yield questions.."
            role="Full-Stack Developer & UI/UX Designer"
            timeline="1 Week, 2025"
            tech="Next.js, MongoDB, Vercel, TailwindCSS"
            liveLink="https://questionbank-r4if.vercel.app/"
            codeLink="https://github.com/Pragyan1019/Questionbank"/>
           </motion.div>
          <motion.div
                      className=" overflow-hidden grid grid-cols-1 z-10">
                        <Flippablecards
                         title="SecurePass - A Local Password Manager"
            frontImage="project2.png"
            description="NEB students lacked a central platform for targeted exam practice, forcing them to sift through disorganized materials. This project closes that gap by providing a curated database of high-yield questions.."
            role="Full-Stack Developer"
            timeline="4 days, 2025"
            tech="React, Tailwind CSS, Local Storage"
           
            codeLink="https://github.com/Pragyan1019/Questionbank"/>
           </motion.div>
 
          <motion.div
                      className=" overflow-hidden grid grid-cols-1 z-10">
                        <Flippablecards
                         title="MelodyBox - Your Personal Music Hub"
            frontImage="project3.png"
            description="Mainstream music platforms can be bloated and restrictive. MelodyBox offers a clean, lightweight, and ad-free interface for users to upload their own audio files, create personal playlists, and enjoy an uninterrupted listening experience."
            role=" Developer"
            timeline="2 weeks, 2024"
            tech="HTML , CSS, JavaScript"
           
            codeLink="https://github.com/Pragyan1019/Questionbank"/>
           </motion.div>
 
          <motion.div
                      className=" overflow-hidden grid grid-cols-1 z-10">
                        <Flippablecards
                         title="X - A Social Media Clone"
            frontImage="project4.png"
            description="The challenge was to meticulously replicate the complex and responsive user interface of X (Twitter) using only structural HTML and utility-first CSS. This project demonstrates a mastery of Tailwind CSS by building a pixel-perfect, static version of the platform's core layout, including the main feed, side navigation, and trends bar."
            role="Frontend Developer"
            timeline="1 weesk, 2025"
            tech="HTML, Tailwind CSS"
           
            codeLink="https://github.com/Pragyan1019/Questionbank"/>
           </motion.div>
 
          <motion.div
                      className=" overflow-hidden grid grid-cols-1 z-10">
                        <Flippablecards
                         title="Todo - A Minimalist Todo Application"
            frontImage="project5.png"
            description="Productivity tools are often over-engineered. Taskify is a clean and intuitive todo list application designed to showcase fundamental React concepts, including state management, component-based architecture, and local data persistence."
            role="Full-Stack Developer & UI/UX Designer"
            timeline="3 days, 2025"
            tech="React, CSS Modules, Local Storage, Vite"
           
            codeLink="https://github.com/Pragyan1019/Questionbank"/>
           </motion.div>
 
          <motion.div
                      className=" overflow-hidden grid grid-cols-1 z-10">
                        <Flippablecards
                         title="Personal Portfolio - A Developer's Showcase"
            frontImage="project6.png"
            description="A static resume fails to capture the dynamic nature of web development. This personal portfolio was built to serve as an interactive hub for my projects, skills, and professional journey, using fluid animations to create an engaging user experience."
            role="Full-Stack Developer & UI/UX Designer"
            timeline="4 days, 2025"
            tech="Next.js, Tailwind CSS, Framer Motion"
           
            codeLink="https://github.com/Pragyan1019/Questionbank"/>
           </motion.div>
 
        </div>
      </div>
    
    
    
    
    
    
    </>
  )
}

export default Page
