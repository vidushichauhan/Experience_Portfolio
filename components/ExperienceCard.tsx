import { motion } from 'framer-motion'
import React from 'react'
import dellLogo from '/Users/vidushichauhan/Desktop/Projects_Company/PORTFOLIO/portfolio/Images/Dell_Logo.png'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
<article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[300px] md:w-[300px] xl:w-[500px] snap-center bg-[#292929] p-10
hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden '>
<motion.img
      initial={{
        y:-100,
        opacity:0,
      }}
      transition={{duration:1.2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      src={dellLogo.src}
      className='w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
      ></motion.img>

      <div>
        <h4 className='text-4xl font-light'> Software Engineer 1</h4>
        <p className='font-bold text-2xl mt-1'>Dell Technologies</p>
        <div className='flex space-x-2 my-2'>
           
            {/*Tech used
             <img className='h-10 w-10 rounded-full' src="" alt="" />
            */}
            {/*Tech used*/}
            {/*Tech used*/}
        </div>
        <p className='uppercase py-5 text-gray-500'> Started work...-Ended..</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
        </ul>
      </div>
</article>
  )
}

export default ExperienceCard