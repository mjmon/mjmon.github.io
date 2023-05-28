import React from "react";
import { heroBg } from "../assets";
import { githubLink } from "../constants/webLinks";
import { openInNewTab, scrollTo } from "../utils/";

const Hero = () => {
  const scrollTo = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView();
  };

  return (
    <section id="home" className="px-5 sm:px-28">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        {/* maintext */}
        <div>
          <div className="mt-0 sm:mt-8">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              Your <span className="text-blueGray">Web</span> and <br />
              <span className="text-blueGray"> Mobile</span> solutions
            </h1>
            <p className="text-base pt-4 text-blueGray">
              Allow me to assist you in revolutionizing your online existence
              and creating a strong digital footprint starting right now.
            </p>
          </div>

          <div className="mt-10">
            <button
              onClick={() => scrollTo("#contact")}
              className="
        w-full sm:w-auto
        bg-blue-500 hover:bg-blue-700 text-blueGray font-bold py-4 px-12 border border-blue-700 rounded  mb-3 sm:mb-5 mr-0 sm:mr-4 "
            >
              Get Started
            </button>
            <button
              onClick={() => openInNewTab(githubLink)}
              className="
         w-full sm:w-auto  hover:bg-primary text- font-semibold hover:text-white py-4 px-12 border border-secondary rounded"
            >
              Visit GitHub
            </button>
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <img src={heroBg} alt="background" className="h-60 sm:h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
