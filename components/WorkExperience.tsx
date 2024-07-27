import { motion } from 'framer-motion'
import React from 'react'
import DellExperience from './DellExperience'
import CognizantInternship from './CognizantInternship'
import OngcExperience from './OngcExperience'
import DellExperience2 from './DellExperience2'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity:0
      }}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
     className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h2 className='absolute top-24 text-gray-500 tracking-[20px] uppercase'>Work Experience</h2>

        <div className='mt-20 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <DellExperience2/>
            {/*ExperienceCard */}
            <DellExperience/>
            {/*ExperienceCard */}
            <CognizantInternship/>
            {/*ExperienceCard */}
            <OngcExperience/>
        </div>
        </motion.div>
  )
}

export default WorkExperience