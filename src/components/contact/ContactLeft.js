import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-4"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl lg:text-3xl font-bold text-white">ASHIN S H</h3>
        <p className="text-sm lg:text-base text-gray-400 tracking-wide">
          This is my contact details, you can contact me any time you need.
        </p>
        <p className="text-sm lg:text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8925688718</span>
        </p>
        <p className="text-sm lg:text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ashinsh45@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-sm lg:text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100092933104113&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://x.com/lonely__ashin?t=UvQobmHaBMmqU1vOHrdJMQ&s=08" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/ashin-s-h-95a276291" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/_.3lite.ashn.__?igsh=MmFjZjV0azJzZXl4" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
