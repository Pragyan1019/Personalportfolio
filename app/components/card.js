"use client"
import React from 'react'
           import { useState } from "react";

import { motion, scale, useScroll, useTransform } from "framer-motion";

const Card = () => {
    const [isflipped, setisflipped] = useState(false);

  return (
     <div className="card md:max-w-[60%]  w-[100vh] rounded-2xl overflow-hidden shadow-xl
                    hover:scale-105 hover:cursor-pointer hover:shadow-2xl transition-all duration-300   md:w-[400px] md:h-[420px] h-[45vh]"     
                    onMouseEnter={()=>setisflipped(true)}
                    onMouseLeave={()=>setisflipped(false)}>
                      <motion.div className="w-full h-full relative"
                      animate={{
                        rotateY:isflipped? 180:0}}
                        transition={{
                            duration:0.6,
                            ease:'easeInOut'
                          }}
                           style={{ transformStyle: "preserve-3d" }} 
                      
                      >
                        <div className="front absolute w-full h-full" style={{ backfaceVisibility: "hidden" }}>
<img src="pragyanimage.jpg" alt="Photo of Pragyan"   className="rounded-t-2xl bg-linear-60 w-full h-full object-cover"/>
<motion.div className="p  px-4 py-2  absolute bottom-0 left-0 w-full p-4
                        bg-black/30 backdrop-blur-sm text-white">
<motion.p className="p font-bold text-center text-xl  mb-1">Pragyan Ghimire | Web Developer</motion.p>

</motion.div>
</div>
   <div className="back absolute w-full h-full  bg-slate-800 rounded-2xl px-6 py-4 text-white flex flex-col justify-evenly items-center  gap-8" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
     <div className="about">
     <h3 className='text-2xl font-bold mb-3'> About Me</h3> 
     <p className='text-slate-300 '> Student developer with a strategist's mind from chess and a love for teamwork from football.</p>
    </div>
    <motion.div className="flex flex-wrap  gap-2 text-start w-full">
        <ul className=' font-bold '><span className='text-2xl'>Skills</span>
        <li className="text-slate-300">Javascript</li>
        <li className="text-slate-300">React</li>
        <li className="text-slate-300">Tailwindcss</li>
        <li className="text-slate-300">Express</li>
        <li className="text-slate-300">MongoDB</li>
        <li className="text-slate-300">Next js</li>
        </ul>
         </motion.div>
   
   </div>
</motion.div>
              </div>  
  )
}

export default Card
