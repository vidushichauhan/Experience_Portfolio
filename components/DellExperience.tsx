import { motion } from 'framer-motion';
import React from 'react';
import dellLogo from '/Users/vidushichauhan/Desktop/Projects_Company/PORTFOLIO/portfolio/Images/Dell_Logo.png';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[400px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden border border-gray-700 shadow-lg'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={dellLogo.src}
        className='w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
      />

      <div className='text-center'>
        <h4 className='text-4xl font-light text-white'>Software Engineer 1</h4>
        <p className='font-bold text-2xl mt-1 text-white'>Dell Technologies</p>
        <p className='py-5 text-gray-400'>August 2021 to March 2023</p>
        <ul className='text-sm list-disc space-y-4 ml-5 text-left text-gray-300'>
        <li>Worked on both front-end and back-end development tasks using Angular and Spring Boot.</li>
        <li>Assisted in the development and maintenance of RESTful APIs.</li>
        <li> Worked on <span></span> 
              <a 
                href='https://www.dell.com/en-us/dt/video-collateral/ms360-on-site-services.htm' 
                className='text-blue-500 underline hover:text-blue-700'
                target='_blank' 
                rel='noopener noreferrer'
              >
                MS360 Website
              </a>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard;
