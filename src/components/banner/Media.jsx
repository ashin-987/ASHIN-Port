import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-6 justify-between items-start lg:items-center">
      <div>
        <h2 className="text-base md:text-lg uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100092933104113&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/lonely__ashin?t=UvQobmHaBMmqU1vOHrdJMQ&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/ashin-s-h-95a276291"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/_.3lite.ashn.__?igsh=MmFjZjV0azJzZXl4"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base md:text-lg uppercase font-titleFont mb-4">
          Best Skill On
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Media;
