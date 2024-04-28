import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl'>
      <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale: 0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5
      }}
      className='flex flex-row item-center space-x-3 px-5 mt-2'
     >
        <SocialIcon url="https://www.linkedin.com/in/vidushi-chauhan-1615ab184/ " bgColor='black' />
        <SocialIcon url="https://github.com/vidushichauhan" />
        <SocialIcon className='cursor-pointer' network='email' bgColor='black'/>
        <p className='uppercase hidden md:inline-flex text-sm text-black items-center font-bold'>Get In Touch</p>
        </motion.div>

    </header>
  )
}