import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';

function Hero() {
  const [text] = useTypewriter({
    words: [
      'Hello, World!',
      'I\'m Vidushi Chauhan.',
      'Explore My Tech Creations.',
      'Driven by Code & Innovation.',
      'Welcome to My Digital Space.'
    ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div className='h-screen relative flex items-center justify-center overflow-hidden'>
      <BackgroundCircle />
      <div className='absolute flex flex-col items-center'>
        <img 
          className='rounded-full h-40 w-40 object-cover'
          src='https://media.licdn.com/dms/image/D4D03AQFIVWLBQ9QuRQ/profile-displayphoto-shrink_800_800/0/1698491636361?e=1719446400&v=beta&t=bKe2rVNCHzfyVHcpA_5CAx4cH7_hT__vB3kn_8QtG9Q'/>
        <h2 className='text-sm uppercase text-gray-600 pb-2 tracking-[10px]'>Software Engineer</h2>
        <h1 className="text-5xl text-white lg:text-6xl font-semibold z-20 mt-4 scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor='red' />
        </h1>
        
      </div>
      <div className='space-x-3 absolute bottom-10 justify-evenly items-center'>
          <Link href="#about">
          <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
          <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
          <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
          <button className='heroButton'>Projects</button>
          </Link>
        </div>
      
    </div>
  );
}

export default Hero;
