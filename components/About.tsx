import { motion } from 'framer-motion'
import React from 'react'
import myImage from '/Users/vidushichauhan/Desktop/Projects_Company/PORTFOLIO/portfolio/Images/myImage.jpeg'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7l px-10 justify-evenly mx-auto items-center'>
        <h2 className='absolute top-24 text-gray-500 tracking-[20px] uppercase'>About</h2>
      <motion.img
      initial={{
        x:-200,
        opacity:0
      }}
      transition={{duration:1.2,}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
      src={myImage.src}
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      ></motion.img>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'> 
        Here is the <span className='underline decoration-red-900'>little</span> background</h4>
        <p className='text-sm'>
          Hi this is Vidushi Chauhan. I am currently doing Masters in University of Windsor. I have 2 years of experience.I love coding. I have speciality in Backend.
        </p>
      </div>
      </motion.div>
  )
}

export default About