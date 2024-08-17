import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        
        </div>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-10">
          <ResumeCard
            title="Secondary School"
            subTitle="Good Shepherd School Marthandam (2021 - 2023)"
            result="81.5/100"
            des="In my schooling I took Maths-Biology Group. I studied key subjects like Biology, Chemistry, and Physics, which helped me develop a strong foundation in the life sciences. "
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* ... */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-10">

          <ResumeCard
            title="B.E.ECE"
            subTitle="Chennai Institute of Technology - (2023 - 2027)"
            result="8.3/10"
            des="Google's hiring process is an important process of our culture. Googlers care deeply about their teams and the people who make them up."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education