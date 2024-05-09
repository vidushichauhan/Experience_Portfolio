import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  const projects =[1,2,3,4];
  let i=0;
  return (
    <motion.div 
            initial={{
                opacity:0
            }}
            transition={{duration: 1.5}}
            whileInView={{opacity:1}}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto justify-evenly items-center z-0'>
    <h2 className='absolute top-10 text-gray-500 tracking-[20px] uppercase'>Projects</h2>
    
    <div className='relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
      {projects.map((project,i)=>(
        <div className='justify-center flex-shrink-0 snap-center flex flex-col space-y-5 p-20 md:p-44 h-screen '>
          <img className='w-100 h-100' src="https://tms-outsource.com/blog/wp-content/uploads/2023/02/it-project-manager.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-center text-2xl font-semibold underline decoration-[grey]/50'> This is project {i+1} of {projects.length}</h4>
            <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti laudantium tempora incidunt possimus omnis minima voluptate consequuntur quo dolorum excepturi iste ipsam, ut repudiandae expedita quaerat porro, commodi mollitia animi!</p>
          </div>
        </div>
      ))}
    </div>
    <div className='absolute w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12'></div>
  </motion.div>
  
  )
}

export default Projects