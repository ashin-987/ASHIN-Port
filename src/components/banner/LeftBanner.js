import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Engineering Student", "FrontEnd Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-14 lg:gap-20">
      <div className="flex flex-col gap-3 md:gap-5">
        <h4 className="text-base md:text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ashin S H</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm md:text-base font-bodyFont leading-6 md:leading-7 lg:leading-8 tracking-wide">
          As an engineering student with a passion for creativity and design, I specialize
          in front-end development. My goal is to blend technical skills with innovative 
          solutions to build engaging and user-friendly web experiences.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner;
