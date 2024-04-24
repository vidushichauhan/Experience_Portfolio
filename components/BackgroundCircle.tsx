import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

export default function BackgroundCircle({}: Props) {
  return (

    <div className='flex justify-center items-center w-full h-screen'>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ scale: [1, 2, 2, 3, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0] }}
        transition={{ duration: 2.5 }}
        className='absolute inset-0 flex justify-center items-center'
      >
        
      <div className='absolute border border-black rounded-full h-[200px] w-[200px] animate-ping '/>
      <div className='absolute border border-black rounded-full h-[250px] w-[250px] animate-ping '/>
      <div className='absolute border border-black rounded-full h-[300px] w-[300px] animate-ping '/>
      <div className='absolute border border-black rounded-full h-[350px] w-[350px] opacity-20 animate-ping '/>
      <div className='absolute border border-black rounded-full h-[400px] w-[400px] opacity-20'/>
    </motion.div>
    </div>
  )
}
