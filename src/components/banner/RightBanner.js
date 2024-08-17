import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[250px] h-[330px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[540px] xl:w-[500px] xl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[280px] h-[250px] md:w-[350px] md:h-[300px] lg:w-[450px] lg:h-[400px] xl:w-[500px] xl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;
