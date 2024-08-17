import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 sm:px-2 md:px-4">
      <Navbar />
      <div className="max-w-screen-lg mx-auto lg:max-w-screen-xl">
        <Banner />
        <Features />
        <Resume />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;

