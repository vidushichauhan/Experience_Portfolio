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
        <h4 className='text-4xl font-light text-white'>Software Engineer 2</h4>
        <p className='font-bold text-2xl mt-1 text-white'>Dell Technologies</p>
        <p className='py-5 text-gray-400'>March 2023 to January 2024</p>
        <ul className='text-sm list-disc space-y-4 ml-5 text-left text-gray-300'>
          <li>Developed a Spring Boot Kafka project from scratch and migrated from Redis to Kafka.</li>
          <li>Upgraded Spring Boot projects from Java 8 to Java 17.</li>
          <li>Enhanced the Angular UI with minor improvements.</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard;
