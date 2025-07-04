"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
const pathVarients={
  hidden:{
    opacity:0,
    pathLength:0
  },
  visible:{
    opacity:1,
        pathLength:1,
        transition:{
          duration:2.5,
          delay:0.5,
          ease:'easeInOut'
        }


  }
}
const listVarients={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
        transition:{
         straggerChildren:0.2,
          delayChildren: 0.5,
        }


  }
}
const listitemVarients={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
        transition:{
         duration:2.5,
         ease:'easeOut',
                   delay:0.5


        }


  }
}


const Navbar = () => {
  return (
    <>
    <nav className='flex md:justify-between justify-center mx-5 mb-5  py-10  border-none rounded-4xl px-20 text-lg  bg-transparent z-10'>
      <div className='md:block hidden'> 
        <svg width="150" height="" viewBox="0 0 350 72.73209700036185" className="looka-1j8o68f"><defs id="SvgjsDefs1021"></defs><g id="SvgjsG1022" featurekey="dVtZHI-0" transform="matrix(4.614979590058809,0,0,4.614979590058809,6.017248543056038e-7,-19.567512405564347)" >
          <motion.path variants={pathVarients} initial="hidden" animate="visible"stroke="#ffffff" d="M1.38 4.24 l-1.38 0 l0 0.64 l0.9 0 l0.44 0 c1.64 0 2.8734 0.47334 3.7 1.42 s1.24 2.18 1.24 3.7 l0 0.22 c0 1.4933 -0.41334 2.7134 -1.24 3.66 s-2.06 1.42 -3.7 1.42 l-0.64 0 l0 0 l-0.44 0 l-0.22 0 l-0.04 0 l0 4.7 l0.7 0 l0 -4.04 l0.68 0 c1.84 0 3.2366 -0.54334 4.19 -1.63 s1.43 -2.45 1.43 -4.09 l0 -0.26 c0 -1.64 -0.48334 -3.0066 -1.45 -4.1 s-2.3566 -1.64 -4.17 -1.64 z M14 15.219999999999999 c0.85334 -0.48 1.5067 -1.1567 1.96 -2.03 s0.68 -1.8633 0.68 -2.97 l0 -0.28 c0 -1.64 -0.49 -3 -1.47 -4.08 s-2.3766 -1.62 -4.19 -1.62 l-1.38 0 l0 6.34 c0.22666 0.01334 0.45332 0.02 0.67998 0.02 l0 -5.72 l0.66 0 c1.64 0 2.88 0.47666 3.72 1.43 s1.26 2.1766 1.26 3.67 l0 0.22 c0 1.48 -0.42 2.6934 -1.26 3.64 s-2.08 1.42 -3.72 1.42 l-0.66 0 l0 0 l-0.68 0 l0 0.64 c0.4 0.01334 0.66666 0.02 0.8 0.02 l0.58 0 c0.92 0 1.7267 -0.14 2.42 -0.42 l2.48 4.5 l0.8 0 z M24.62 6.140000000000001 c0 0.08 0.23666 0.84334 0.71 2.29 s0.99 3.03 1.55 4.75 s1.3133 3.9934 2.26 6.82 l0.86 0 l-5.3 -15.76 l-0.16 0 l-5.26 15.76 l0.82 0 z M24.26 15.52 l-0.72 0 l1.2 4.48 l0.72 0 z M37.28 20 l0.06 -0.64002 c-0.76 -0.08 -1.4033 -0.33666 -1.93 -0.77 s-0.95 -0.97 -1.27 -1.61 s-0.55 -1.3533 -0.69 -2.14 s-0.21 -1.5733 -0.21 -2.36 l0 -0.74 c0 -0.85334 0.08666 -1.69 0.26 -2.51 s0.44 -1.55 0.8 -2.19 s0.82334 -1.1567 1.39 -1.55 s1.2433 -0.59 2.03 -0.59 c0.68 0 1.2 0.08666 1.56 0.26 s0.68666 0.37334 0.98 0.6 l0.4 -0.5 c-0.38666 -0.30666 -0.79666 -0.55 -1.23 -0.73 s-1.0033 -0.27 -1.71 -0.27 c-1.5333 0 -2.77 0.68334 -3.71 2.05 s-1.41 3.1766 -1.41 5.43 l0 0.74 c0 2.16 0.41666 3.9134 1.25 5.26 s1.9767 2.1 3.43 2.26 z M38.38 19.999980469 c1.1333 -0.08 2.1134 -0.46 2.94 -1.14 l0.12 -0.1 l0 -5.34 l-3.94 0 l0 0.66 l3.3 0 l0 4.38 c-0.69334 0.52 -1.5133 0.82 -2.46 0.9 z M52.3 4.24 l-0.86 0 l-3.78 10.2 l0 5.56 l0.84 0 l0 -5.56 z M45.46 5.699999999999999 l-0.54 -1.46 l-0.88 0 l0.56 1.46 l0.86 0 z M60.239999999999995 6.140000000000001 c0 0.08 0.23666 0.84334 0.71 2.29 s0.99 3.03 1.55 4.75 s1.3133 3.9934 2.26 6.82 l0.86 0 l-5.3 -15.76 l-0.16 0 l-5.26 15.76 l0.82 0 z M59.879999999999995 15.52 l-0.72 0 l1.2 4.48 l0.72 0 z M75.2 4.58 l-0.000019531 11.56 c0 0.36 0.0066602 0.76 0.02 1.2 s0.02 0.66666 0.02 0.68 c-0.02666 -0.04 -0.12332 -0.25666 -0.28998 -0.65 s-0.33 -0.74334 -0.49 -1.05 l-0.28 -0.54 l-0.72 0 l2.2 4.22 l0.18 0 l0 -15.42 l-0.64 0 z M69.58 7.9399999999999995 l0.27998 0.54 l0.72 0 l-2.22 -4.24 l-0.14 0 l0 15.46 l0.62 0 l0 -11.6 c0 -0.33334 -0.0066602 -0.72334 -0.02 -1.17 s-0.02 -0.67666 -0.02 -0.69 c0.01334 0.04 0.10668 0.26 0.28002 0.66 s0.34 0.74666 0.5 1.04 z">
          </motion.path>
           </g></svg> </div>
       
      <motion.ul ariants={listVarients}
        initial="hidden" animate="visible"
        
        className='flex gap-9'>
       <Link href="/">    <motion.li  variants={listitemVarients}
        initial="hidden" animate="visible" className='font-semibold md:hidden block cursor-pointer hover:scale-120 transition-all ease-in-out'>         <svg 
  width="40" 
  height="" 
  viewBox="0 0 100 100" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg">
  
  <g transform="scale(3.8) translate(8, -2)" fill="#FFFFFF">
    <path d="M8.36 5 q2.38 0 3.84 1.37 t1.46 3.65 t-1.44 3.64 t-3.86 1.36 l-3.82 0 l0 4.08 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -6.2 q0 -0.28 0.21 -0.49 t0.49 -0.21 l5.92 0 q1.34 0 1.92 -0.58 q0.58 -0.52 0.58 -1.58 t-0.6 -1.63 t-1.9 -0.57 l-5.92 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.04 0 z"></path>
  </g>
</svg></motion.li></Link>
      <Link href="/work">     <motion.li variants={listitemVarients}
        initial="hidden" animate="visible" className='font-semibold cursor-pointer hover:scale-120 transition-all ease-in-out'>Work</motion.li></Link> 
         <Link href="/about">     <motion.li variants={listitemVarients}
        initial="hidden" animate="visible" className='font-semibold cursor-pointer hover:scale-120 transition-all ease-in-out'>About</motion.li></Link> 
          <Link href="/services">  <motion.li variants={listitemVarients}
        initial="hidden" animate="visible" className='font-semibold cursor-pointer hover:scale-120 transition-all ease-in-out'>Service</motion.li></Link> 
        </motion.ul>
    </nav>
    </>
  )
}

export default Navbar
