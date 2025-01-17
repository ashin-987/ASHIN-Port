import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-1/3 h-auto md:w-1/4 lg:w-1/6 xl:w-2/6" />
      </div>

      <ul className="hidden mdl:flex items-center gap-6 lg:gap-10">
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            key={_id}
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl mdl:hidden bg-black w-10 h-10 flex items-center justify-center rounded-full text-designColor cursor-pointer"
      >
        <FiMenu />
      </span>

      {showMenu && (
        <div className="w-full h-screen bg-gray-900 fixed top-0 left-0 p-4 overflow-y-auto">
          <div className="flex flex-col gap-8 py-2 relative">
            <div className="flex flex-col items-center">
              <img className="w-32 md:w-40 lg:w-48" src={logo} alt="logo" />
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 mt-8">
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex justify-center gap-4">
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

            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
