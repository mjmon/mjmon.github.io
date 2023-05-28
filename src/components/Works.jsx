import React from "react";
import { works } from "../constants";
import { playstore, appstore } from "../assets";

const Works = () => {
  return (
    <section id="works" className="px-5 sm:px-28 ">
      <h1 className="sect-header">Past Works</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 ">
        {works.map((work, index) => {
          return <WorkItem key={index} {...work} />;
        })}
      </div>
    </section>
  );
};

export default Works;

const WorkItem = (props) => {
  const { id, title, logo, desc, android, ios, tech } = props;

  return (
    <div className="p-6 bg-primary border border-sky-800 hover:border-sky-400 rounded-lg">
      <div
        className="flex flex-row justify-center items-center 
      "
      >
        <h3 className="text-white text-2xl mr-3">{title}</h3>
        <img src={logo} alt={logo} className="w-10 h-10 object-contain" />
      </div>
      <p className="text-sm mt-3 text-gray-400 text-center">{desc}</p>
      <div className="flex flex-col sm:flex-row mt-5 items-center">
        <a href={android}>
          <img
            src={playstore}
            alt="playstore"
            className="w-[150px] h-16 object-contain"
          />
        </a>
        <a href={ios}>
          <img
            src={appstore}
            alt="appstore"
            className="w-[150px] h-11 object-contain"
          />
        </a>
      </div>
    </div>
  );
};
