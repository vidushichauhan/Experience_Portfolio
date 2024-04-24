import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
type Props = {}



function Hero({}: Props) {
    const [text] = useTypewriter({
      words: [
        'Hello, World!',
        'I\'m Vidushi Chauhan.',
        'Explore My Tech Creations.',
        'Driven by Code & Innovation.',
        'Welcome to My Digital Space.'
      ],
        loop: true,
        delaySpeed:2000
      });
  return (
    
    <div className='h-screen flex flex-col space-y-8 items-center justify-center snap-y snap-mandatory overflow-scroll'>
      
        <BackgroundCircle/>
        <h1 className="text-3xl font-bold">
    <span>{text}</span>
    <Cursor cursorColor='red' />
</h1>
    </div>
  )
}

export default Hero