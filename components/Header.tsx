import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl'>
        <div className='flex flex-row item-center space-x-1 px-1 mt-1'>{/*Social Icons*/}
        <SocialIcon url="https://www.linkedin.com/in/vidushi-chauhan-1615ab184/ " bgColor='black' />
        <SocialIcon url="https://github.com/vidushichauhan" />
        <SocialIcon className='cursor-pointer' network='email' bgColor='black'/>
        <p className='uppercase hidden md:inline-flex text-sm text-black items-center'>Get In Touch</p>
        </div>

    </header>
  )
}