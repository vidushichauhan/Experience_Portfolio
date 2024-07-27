import { motion } from 'framer-motion';
import React from 'react';
import ONGC_Logo from '/Users/vidushichauhan/Desktop/Projects_Company/PORTFOLIO/portfolio/Images/ONGC_Logo.png';

type Props = {}

const ONGCInternship = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[400px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden border border-gray-700 shadow-lg'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={ONGC_Logo.src}
        className='w-32 h-32 object-cover object-center'
      />

      <div className='text-center'>
        <h4 className='text-2xl font-light text-white'>IT Intern</h4>
        <p className='font-bold text-xl mt-1 text-white'>Oil and Natural Gas Corporation</p>
        <p className='py-5 text-gray-400'>May 2019 to July 2019</p>
        <ul className='list-disc space-y-2 ml-5 text-left text-sm text-gray-300'>
          <li>Worked on various IT infrastructure projects to enhance company operations.</li>
          <li>Assisted in the development and maintenance of internal software applications.</li>
          <li>Conducted data analysis and reported key insights to senior management.</li>
          <li>Collaborated with cross-functional teams to deliver IT solutions.</li>
          <li>Gained hands-on experience in IT project management and technical support.</li>
        </ul>
      </div>
    </article>
  )
}

export default ONGCInternship;
