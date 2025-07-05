"use client";

import Image from "next/image";
import { motion, scale, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import GradientText from "./components/Modern";
            import Particles from './components/background';
import Card from "./components/card";
import Form from "./components/Form";
          import Link from "next/link";

           import Hyperspeed from './components/hypercard';



const imageVariants = {
  intiital: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
};
const imageTransition = {
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 15,
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);


  return (
    <>
      <div className="relative md:min-h-screen h-[95vh] z-30">
      <div className="absolute w-[100%] h-[100%]  bg-black bg-gradient-to-t from-white/30 to-transparent -z-20"></div>
      <div style={{ width: '100%', height: '100vh', position: 'absolute',zIndex:-10}} >
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
        <Navbar />
        <motion.div
          animate={{
            x: [-1500, 0],
          }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: "anticipate",
          }}
          className="title text-white md:w-[70%]   mx-auto flex flex-col p-3 md:mt-20 mt-20 gap-5 z-10"
        >
          <motion.div className="md:text-8xl text-6xl  font-bold text-center z-10">
            Bu
            <motion.span className="relative hidden md:inline-block z-10">
              <motion.span
                animate={{
                  y: [-1000, 10, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  times: [0, 0.8, 1],
                }}
                className="w-[18px] h-[16px] rounded-[100%] bg-white text-white absolute z-30 left-[5px] top-[9px]"
              ></motion.span>
              <motion.span
                style={{ display: "inline-block", transformOrigin: "bottom" }}
                animate={{
                  scaleY: [0, 1.2, 1],
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                  times: [0, 0.8, 1],
                }}
                className="z-10"
              >
                &#305;
              </motion.span>
            </motion.span>
          <span className="md:hidden">i</span>lding the
            <span className=" z-10">
              <GradientText
                colors={["#475569", "#e2e8f0", " #475569"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                Modern
              </GradientText>
            </span>
            Web.
          </motion.div>
          <motion.div className="text-center w-[60%] mx-auto z-10 md:mt-0 mt-4 leading-relaxed">
            Hi, I&apos;m Pragyan. I architect and develop high-performance web
            applications, using React, Next.js, and Node.js to craft seamless,
            user-centric digital experiences.
          </motion.div>
          <div className="flex mx-auto  gap-5 md:mt-0 mt-10">
       <a href="https://www.linkedin.com/in/pragyan-ghimire-508717363/" target="_blank">    <button className="bg-teal-500 text-white font-semibold z-30 py-2 px-5 rounded-3xl transition-colors hover:bg-teal-400 hover:cursor-pointer">
              Contact us
            </button></a> 
        <Link href="/work">   <button className="font-semibold border border-slate-600 z-30 text-slate-300 py-2 px-5 rounded-3xl transition-colors hover:bg-slate-800 hover:border-slate-500 hover:cursor-pointer">
              View My Work
            </button></Link> 
          </div>
        </motion.div>
        <motion.div
          animate={{
            opacity: [0, 0.5, 1],
          }}
          transition={{
            delay: 1.5,
            duration: 2,
            ease: "backInOut",
          }}
          className="w-full text-center mt-8"
        >
          <motion.div className="w-full text-center " style={{ opacity }}>
            <span className="text-[10px] z-10"> Scroll down</span>
            <motion.svg
              animate={{
                y: [0, 3, 0],
              }}
              transition={{
                duration: 1.5,

                ease: "easeInOut",
                repeat: Infinity,
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-3 mx-auto"
            >
              <motion.path
                //  initial={{ pathLength:0 }}
                //  animate={{
                //    pathLength:1
                //   }}
                //   transition={{
                //     duration:1,
                //     delay:1,
                //   ease:"easeInOut",
                //   repeat: Infinity,
                //   repeatType:"reverse"
                //   }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>

      <div className="project relative md:min-h-screen h-[95vh] bg-black text-white bg-gradient-to-b from-white/30 to-transparent">
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
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            duration: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center p-4 text-4xl font-semibold z-10"
        >
          Featured Projects
        </motion.h1>
        <div className="cards  md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-2 md:w-[65%] w-[97%] p-2 grid gap-x-4 gap-y-3
         mx-auto my-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.5,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 1 }}
            whileHover="hover"
            className="project1 shadow-[inset_0_2px_8px_0_rgba(0,0,0,0.2)]  text-black overflow-hidden grid grid-cols-1 mx-auto bg-slate-200 backdrop-blur-lg w-full  px-5 py-3 border-none rounded hover:cursor-pointer z-10"
          >
            <motion.img
              transition={imageTransition}
              variants={imageVariants}
              src="project1.png"
              alt="Question Bank Project Screenshot"
              className="h-44  mx-auto border-none rounded-2xl"
            />
            <p className="title pt-1 mt-2">
              <span className="font-bold">Question Bank: </span>
              <span className="text-sm ">
                A web platform that helps NEB students study smarter by
                providing a curated database of high-yield, frequently asked
                exam questions.
              </span>
            </p>
            <p className="link flex justify-start gap-4 mt-auto">
              <span className="text-gray-700">
               
                <a href="https://questionbank-r4if.vercel.app/" target="_blank">
                 
                  <u>Site:Question Bank</u>
                </a>
              </span>
              <span className="text-gray-700">
               
                <a
                  href="https://github.com/Pragyan1019/Questionbank"
                  target="_blank"
                >
                 
                  <u>Github</u>
                </a>
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.5,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 1 }}
            whileHover="hover"
            className="project1 shadow-[inset_0_2px_8px_0_rgba(0,0,0,0.2)] text-black overflow-hidden grid grid-cols-1 mx-auto bg-slate-200 w-full  px-5 py-3 border-none rounded hover:cursor-pointer z-10"
          >
            <motion.img
              transition={imageTransition}
              variants={imageVariants}
              src="project2.png"
              alt="Password Manager Project Screenshot"
              className="h-44  mx-auto border-none rounded-2xl"
            />
            <p className="title pt-1 mt-2">
              <span className="font-bold">Password Manager: </span>
              <span className="text-sm ">
                A secure app built with React & Tailwind to store and manage digital credentials.
              </span>
            </p>
            <p className="link flex justify-start gap-4 mt-auto">
              <span className="text-gray-700">
               
                <a
                  href="https://github.com/Pragyan1019/Password-manager"
                  target="_blank"
                >
                 
                  <u>Github:Password Manager</u>
                </a>
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.5,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 1 }}
            whileHover="hover"
            className="project1 shadow-[inset_0_2px_8px_0_rgba(0,0,0,0.2)] text-black overflow-hidden md:grid grid-cols-1 mx-auto bg-slate-200 w-full  px-5 py-3  hidden border-none rounded hover:cursor-pointer z-10"
          >
            <motion.img
              transition={imageTransition}
              variants={imageVariants}
              src="project3.png"
              alt="Song site Screenshot"
              className="h-44  mx-auto border-none rounded-2xl"
            />
            <p className="title pt-1 mt-2">
              <span className="font-bold">Song site: </span>
              <span className="text-sm ">
             An interactive music player built with JavaScript to demonstrate complex DOM manipulation.
              </span>
            </p>
            <p className="link flex justify-start gap-4 mt-auto">
              <span className="text-gray-700">
               
                <a
                  href="https://github.com/Pragyan1019/spotify-clone"
                  target="_blank"
                >
                 
                  <u>Github:Song site</u>
                </a>
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.5,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 1 }}
            whileHover="hover"
            className="project1 shadow-[inset_0_2px_8px_0_rgba(0,0,0,0.2)] text-black overflow-hidden md:grid hidden grid-cols-1 mx-auto bg-slate-200 w-full  px-5 py-3 border-none rounded hover:cursor-pointer z-10"
          >
            <motion.img
              transition={imageTransition}
              variants={imageVariants}
              src="project4.png"
              alt="X clone Screenshot"
              className="h-44  mx-auto border-none rounded-2xl"
            />
            <p className="title pt-1 mt-2">
              <span className="font-bold">X clone: </span>
              <span className="text-sm ">
               A pixel-perfect clone of the Twitter (X) UI, built to showcase responsive design with HTML & Tailwind.
              </span>
            </p>
            <p className="link flex justify-start gap-4 mt-auto">
              <span className="text-gray-700">
               
                <a
                  href="https://github.com/Pragyan1019/X-clone"
                  target="_blank"
                >
                 
                  <u>Github:X clone</u>
                </a>
              </span>
            </p>
          </motion.div>
        </div>
      </div>
            <div className="contact flex justify-center items-center min-h-screen bg-black text-white bg-gradient-to-t from-white/30 to-transparent relative">

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


{/* <div className="md:w-[80%] md:h-[80%] absolute top-0 left-0 w-[100%] h-[50%]" >

<Hyperspeed
  effectOptions={{
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  }}
/>
</div> */}

            <div className="conatiner  flex w-[80%] mx-auto z-10 relative h-full   justify-around items-center md:flex-row flex-col ">
             <div
             className="md:w-1/2 w-[80%] flex justify-center items-center h-fit"
             ><Card/></div>
<div className="form md:w-1/2 w-[80%] mt-4 md:mt-0">
<Form/></div>
            </div>
          
</div>
    </>
  );
}
