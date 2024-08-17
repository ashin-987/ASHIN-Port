import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 mt-4">  {/* Add mt-4 here */}
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="TechNeat Info Solutions Pvt Lmt"
            result="Nagercoil"
            des="Enhanced front-end development skills through a 2-month internship. Successfully applied HTML, CSS, JavaScript, React, and Bootstrap to create interactive web applications. Utilized Figma for UI/UX design."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience
