import { motion } from 'framer-motion';
import React from 'react';
import myImage from '/Users/vidushichauhan/Desktop/Projects_Company/PORTFOLIO/portfolio/Images/myImage.jpeg';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div 
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h2 className='absolute top-24 text-gray-500 tracking-[20px] uppercase'>About</h2>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={myImage.src}
        className='mt-20 md:mt-0 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-4 md:px-10 mt-32'>
        <h4 className='text-4xl font-semibold'> 
          Here is the <span className='underline decoration-red-900'>little</span> background
        </h4>
        <div className='text-sm'>
          <div className='items-center justify-evenly'>
            {/* Content for large screens */}
            <div className="hidden md:block">
              Hi there! I'm Vidushi, a programmer from India currently enrolled in the 
              <span className='text-gray-500 underline decoration-gray-500'>Master of Computer Applications (MAC)</span> program at the University of Windsor.
              My love for coding fuels my drive to excel in the field, and 
              <span className='text-red-700 font-semibold'>I'm actively seeking a co-op opportunity to put my skills into practice and gain valuable real-world experience.</span>
              For the past two years, I thrived as a Software Engineer at Dell Technologies. My dedication and hard work were recognized with a well-deserved promotion, solidifying my commitment to continuous learning and growth.
              Now, I'm eager to take the next step in my career by contributing to innovative projects in a collaborative environment.
              To learn more about my capabilities and experience, I encourage you to explore my portfolio. It showcases my programming skills and provides a glimpse into my passion for software development.
            </div>
            {/* Content for small screens */}
            <div className="block md:hidden">
              Hi there! I'm Vidushi, a programmer from India. I'm currently seeking a co-op opportunity to gain real-world experience.
              <br />
              <br />
              I'm currently enrolled in the 
              <span className='text-gray-500 underline decoration-gray-500'>Master of Computer Applications (MAC)</span> program at the University of Windsor.
            </div>
          </div>
          <br />
          {/* "Here's what you can expect" section hidden on small screens */}
          <div className="hidden md:block">
            <h4 className='font-semibold'> Here's what you can expect from</h4>
            <ul className='list-disc list-inside'>
              <li><span className='font-semibold'>Strong coding skills:</span> Backed by 2 years of industry experience.</li>
              <li><span className='font-semibold'>Quick learner:</span> Eager to adapt and learn new technologies.</li>
              <li><span className='font-semibold'>Team player:</span> Proven ability to collaborate effectively in a team setting.</li>
              <li><span className='font-semibold'>Hardworking and dedicated:</span> Committed to delivering high-quality results.</li>
            </ul>
            <br />
            <div className='text-red-700'>
              I'm confident that my skills and enthusiasm would make me a valuable asset to your team. If you're looking for a motivated and results-oriented software engineer with a strong work ethic, I encourage you to get in touch!
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About;
