import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lg:flex-row items-center border-b-[1px] font-titleFont border-b-black
      md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 xl:pt-24 xl:pb-32"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
