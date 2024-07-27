import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-50 p-5'>
      <motion.div 
        className='flex flex-row items-center space-x-3'
      >  
        <SocialIcon url="https://www.linkedin.com/in/vidushi-chauhan-1615ab184/" target="_blank" rel="noopener noreferrer" bgColor='black' />
        <SocialIcon url="https://github.com/vidushichauhan" target="_blank" rel="noopener noreferrer" />
        <SocialIcon url="mailto:chauha5a@uwindsor.ca" bgColor='black' />
        <p className='uppercase hidden md:inline-flex text-sm text-black items-center font-bold'>Get In Touch</p>
      </motion.div>
    </header>
  )
}
