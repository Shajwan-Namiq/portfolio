import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {  Link } from "react-router-dom";
 import { useSelector } from "react-redux";

//home page
export default function Home() {
     const isDark = useSelector((state) => state.theme.isDark);
      // console.log(isDark)
  return (
    <div
      name="home"
      className={`w-full h-screen ${
        isDark ? "bg-white" : "bg-[#0a192f]"
      }`}
    >
      {/* Container */}
      <div className="w-full h-screen">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-[#457b9d]">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Shajwan Namiq
          </h1>

          <h2 className="text-4xl sm:text-7xl font-bold text-[#b392ac]">
            I'm Frontend Web Developer
          </h2>

          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I help your business get there, no matter where “there” is. I assure
            you that if you choose me, I shall deliver you a bug-free and
            high-quality solution, which end users would like to use and
            experience.
          </p>

          <div>
 
            <div className="w-40 cursor-pointer">
              <Link
                to="/work"
                className="text-white group border-2   py-3 flex justify-center items-center  bg-[#457b9d]  hover:bg-slate-900 hover:border-[#f2f2f2] "
              >
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-5 " />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
