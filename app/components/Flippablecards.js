"use client"
import React from 'react'

import { useState } from "react";
import { motion } from "framer-motion";


const Flippablecards =({ frontImage, title, description, role, timeline, tech, liveLink, codeLink }) => {
    const [IsFlipped, setIsFlipped] = useState(false);
  return (
     <motion.div
                      className="project1 shadow-[inset_0_2px_8px_0_rgba(0,0,0,0.2)] text-black overflow-hidden  mx-auto bg-slate-200 w-full  px-5 py-3 border-none rounded hover:cursor-pointer"
                       onMouseEnter={()=>setIsFlipped(true)}
                    onMouseLeave={()=>setIsFlipped(false)}
          >
            <motion.div className=" w-full h-full relative"  animate={{
                        rotateY:IsFlipped? 180:0}}
                        transition={{
                            duration:0.6,
                            ease:'easeInOut'
                          }}
                           style={{ transformStyle: "preserve-3d" }} 
                      >
          <motion.div className="front" style={{ backfaceVisibility: "hidden" }}>
            <motion.img
              
              src={frontImage}
              alt={`${title} Screenshot`}
              className="h-full w-full  mx-auto border-none rounded-2xl"
            />
          <div className='w-fit mx-auto mt-2 font-semibold text-2xl'> {title}
     </div> 
          <span className='text-[10px] absolute right-0 text-slate-600 bottom-0'>Hover me for more info</span>
            </motion.div>
            <motion.div className='absolute top-0'   style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
 
     <p  className='text-[14px] mb-3.5 '>
      {description}
    </p>
           <div className='mb-4'>
        <p><strong>Role:</strong>{role}</p>
        <p><strong>Timeline:</strong> {timeline}</p>
    </div>
    <div className='mb-8'>
      <p className='font-bold mb-1'>Tech Stack:</p>
      <p >{tech}</p>
    </div>
    <div className="flex gap-16  text-gray-700">
      <a href={codeLink}>View code</a>
    </div>
           </motion.div>
            </motion.div>
          </motion.div>

  )
}

export default Flippablecards
