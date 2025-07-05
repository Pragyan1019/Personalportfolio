"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Myservices from '../components/myservices';

const listitemVarients={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
        transition:{
         duration:2.5,
         ease:'easeOut',
                   delay:0.3


        }


  }
}
const Service = () => {
  return (
            <div className="relative project min-h-screen bg-black text-white bg-gradient-to-b from-white/30 to-transparent box-border px-4 pb-8">
              
<nav className='md:w-[70%] mx-auto md:px-3 flex   text-xl pb-2 md:text-2xl items-center md:justify-between '>
 <Link href="/">   <motion.h1
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
          className="text-center p-4 text-4xl font-semibold"
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
        initial="hidden" animate="visible" className='font-semibold cursor-pointer hover:scale-120 transition-all ease-in-out'>Home</motion.li></Link> 
       <Link href="/about">      <motion.li 
        initial="hidden" animate="visible" className='font-semibold cursor-pointer hover:scale-120 transition-all ease-in-out'>About</motion.li></Link>
        <Link href="/work">     <motion.li 
        initial="hidden" animate="visible" className='font-semibold cursor-pointer hover:scale-120 transition-all ease-in-out'>Work</motion.li></Link>
        </motion.ul>
    
  
        </nav>
        <div className="main md:w-[60%] w-[95%] mx-auto mt-3">
<div className="title text-center">
  <p className='text-3xl'><strong>Services to Bring Your Ideas to Life</strong></p> <br />
  <p className='text-[#B0B0B0]  leading-relaxed text-xl'>I specialize in turning complex problems into elegant, high-performance digital solutions. Whether you&rsquo;re a startup needing a web presence or an established business looking to upgrade, I provide the development expertise to achieve your goals.</p>
</div><br /><br />
<div className="offerings text-center ">
    <p className='text-3xl'><strong>My Core Offerings</strong></p> <br />
    <div className="cards  md:grid-cols-2 md:grid-rows-2 grid  gap-10 " >
   
    <Myservices
    link="layers3.png"
    topic="Custom Web Application Development"
    desc="      I build scalable and secure full-stack applications from the ground up using React, Next.js, and Node.js.
"/>
    <Myservices
    link="rocket.png"
    topic="Responsive & Performant Websites"
    desc="A modern website must be fast and look great on all devices. I specialize in performance optimization and responsive design, ensuring your users have a seamless experience whether they&rsquo;re on a phone, tablet, or desktop.
"/>
    <Myservices
    link="codebranch.png"
    topic="API Development & Integration  "
    desc="Need a powerful backend? I design and build secure, well-documented RESTful APIs with Node.js and connect your application to third-party services, enabling complex functionality and data exchange.
"/>
    <Myservices
    link="lightbulb.png"
    topic="Technical Consultation & Code Audits "
    desc="  Leveraging my &apos;Human-First Engineering&apos; philosophy, I can review your existing codebase to identify performance bottlenecks, improve scalability, and ensure best practices are in place, providing actionable insights for your team.
"/>
     

    </div><br /><br />
    <div className="timline text-center">
    <p className='text-3xl'><strong>My Development Process</strong></p> <br />
<div className="first">
      <p className='text-2xl'><strong>1. Discover & Plan</strong></p> 
       <p className='text-[#B0B0B0]  leading-relaxed'>We&rsquo;ll start with a deep dive into your project goals, target audience, and technical requirements. I&rsquo;ll create a detailed project scope and roadmap to ensure we&rsquo;re aligned from day one.</p>
    <p className='text-4xl mb-6'>  &#x2193;</p>
      <p className='text-2xl'><strong>2. Design & Develop</strong></p> 
       <p className='text-[#B0B0B0]  leading-relaxed'>This is where the magic happens. I&rsquo;ll architect the system and begin crafting clean, efficient code. I believe in transparent progress, so you&rsquo;ll receive regular updates throughout the development cycle.</p>
    <p className='text-4xl mb-6'>  &#x2193;</p>
      <p className='text-2xl'><strong>3. Test & Deploy</strong></p> 
       <p className='text-[#B0B0B0]  leading-relaxed'>This is where the magic happens. I&rsquo;ll architect the system and begin crafting clean, efficient code. I believe in transparent progress, so you&rsquo;ll receive regular updates throughout the development cycle.</p>
    <p className='text-4xl mb-6'>  &#x2193;</p>
      <p className='text-2xl'><strong>4. Support & Iterate</strong></p> 
       <p className='text-[#B0B0B0]  leading-relaxed'>The launch is just the beginning. I offer ongoing support and maintenance packages to keep your application running smoothly and can work with you to iterate and add new features as your business grows.</p>
  
</div> <br /><br />
    </div>
    <div className="cta text-center">
    <p className='text-3xl'><strong>Have a project in mind?</strong></p> <br />
<p className='text-[#B0B0B0]  leading-relaxed'>I&rsquo;m currently available for freelance projects and full-time roles. If you&rsquo;re looking for a developer who can hit the ground running and contribute from day one, let&rsquo;s talk.</p><br />
<a href="https://www.linkedin.com/in/pragyan-ghimire-508717363/"className='  px-5 py-4 rounded border-none bg-teal-500 text-white font-semibold z-10 py-2 px-5 rounded-3xl transition-colors hover:bg-teal-400 hover:cursor-pointer' target='_blank'>Let's Build Together</a>
    </div>

</div>




        </div>
     
    </div>
  )
}

export default Service
