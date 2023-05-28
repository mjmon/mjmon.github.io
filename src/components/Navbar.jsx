import React, { useState } from "react";
import { viteLogo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <nav className="w-full flex flex-row  items-center justify-between pb-3 px-6 sm:px-16">
        <img src={viteLogo} alt="beyumi logo" className="w-10 h-10" />
        {/* text menu */}
        <ul className="hidden sm:flex cursor-pointer">
          {navLinks.map((nav, index) => {
            let isLast = index === navLinks.length - 1;
            return (
              <li
                key={index}
                className={`text ${
                  isLast ? "mr-0" : "mr-8"
                } text-sm sm:text-base hover:text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            );
          })}
        </ul>
        {/* toggle menu */}
        <div className="flex sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-20 right-0  my-2 bg-black-gradient opacity-70`}
          >
            <ul className="list-none flex flex-col items-center">
              {navLinks.map((nav, index) => {
                let isLast = index === navLinks.length - 1;
                return (
                  <li
                    key={index}
                    className={`text ${
                      isLast ? "mr-0" : "mb-3"
                    } text-base sm:text-lg  p-3 text-secondary hover:text-white`}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      {/* divider */}
      <div className="h-[0.1px] w-full bg-slate-600"></div>
    </div>
  );
};

export default Navbar;
