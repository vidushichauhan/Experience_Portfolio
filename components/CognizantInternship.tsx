import { motion } from 'framer-motion';
import React from 'react';
import cognizantlogo from '/Users/vidushichauhan/Desktop/Projects_Company/PORTFOLIO/portfolio/Images/Cognizant_Logo.png';

type Props = {}

const CognizantInternship = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[400px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden border border-gray-700 shadow-lg'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={cognizantlogo.src}
        className='object-cover object-center'
      />

      <div className='text-center'>
        <h4 className='text-2xl font-light text-white'>Full Stack Intern</h4>
        <p className='font-bold text-xl mt-1 text-white'>Cognizant Technology Solutions Ltd</p>
        <p className='uppercase py-5 text-gray-400'>March 2021 to July 2021</p>
        <ul className='list-disc space-y-2 ml-5 text-left text-sm text-gray-300'>
          <li>Worked on both front-end and back-end development tasks using Angular and Spring Boot.</li>
          <li>Assisted in the development and maintenance of RESTful APIs.</li>
          <li>Implemented new features and fixed bugs in existing codebase.</li>
          <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
          <li>Gained hands-on experience in full stack development and agile methodologies.</li>
        </ul>
      </div>
    </article>
  )
}

export default CognizantInternship;
