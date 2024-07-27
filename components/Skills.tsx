import { motion } from 'framer-motion'
import React from 'react'
import ReactSkill from './skillsSet/ReactSkill'
import JavaSkill from './skillsSet/JavaSkill'
import JavaScriptSkill from './skillsSet/JavaScriptSkill'
import HtmlSkill from './skillsSet/HtmlSkill'
import CssSkill from './skillsSet/CssSkill'
import SpringbootSkill from'./skillsSet/SpringbootSkill'
import Cplus from './skillsSet/Cplus'
import AngularSkill from './skillsSet/AngularSkill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
    min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h2 className='absolute top-24 text-gray-500 tracking-[20px] uppercase'>Skills</h2>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency proficiency</h3>
        <div className='grid grid-cols-4 gap-5'>
            <ReactSkill/>
            <JavaSkill/>
            <JavaScriptSkill/>
            <HtmlSkill/>
            <CssSkill/>
            <SpringbootSkill/>
            <Cplus/>
            <AngularSkill/>
        </div>
</motion.div>
  )
}

export default Skills