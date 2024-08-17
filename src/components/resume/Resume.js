import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="RESUME" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi py-3 px-4 cursor-pointer text-center`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi py-3 px-4 cursor-pointer text-center`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
            }}
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi py-3 px-4 cursor-pointer text-center`}
          >
            Experience
          </li>
        </ul>
      </div>
      <div className="mt-10">
        {educationData && <Education />}
        {skillData && <Skills />}
        {experienceData && <Experience />}
      </div>
    </section>
  );
}

export default Resume;
