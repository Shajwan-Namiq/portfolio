import React from "react";
import WorkImg from "../assets/WorkImg.png";
import Dashboard from "../assets/dashboard.png";
import Furniture from "../assets/f.png";
import GPT3 from "../assets/GPT3.png";
import Bank from "../assets/Bank.png";
import NetFlix from "../assets/NetFlix.png";
import { useSelector } from "react-redux";

export default function Work() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <>
      
        {/* Container */}
        <div
          name="work"
          className={`w-full md:h-screen text-gray-300   ${
            isDark ? "bg-white text-slate-900" : "bg-[#0a192f]"
          }`}
        >
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-3 lg:mt-44 mt-20">
              <p className=" text-4xl font-bold inline border-b-4 border-[#457b9d]">
                Work
              </p>
              <p className="py-6"> Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div className=" pb-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div
                style={{ backgroundImage: `url(${NetFlix})` }}
                className="shadow-lg p-2 shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    NetFlix Project <br /> React JS & Tailwind CSS & Next js
                  </span>
                  <div className="pt-8 text-center">
                    <a
                      href="https://netflix-project-beige.vercel.app/
"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/Shajwan-Namiq/Netflix-project">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ backgroundImage: `url(${Bank})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Bank Project <br /> React JS & Tailwind CSS
                  </span>
                  <div className="pt-8 text-center">
                    <a
                      href="https://bank-project-tailwind-css.vercel.app/
"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/Shajwan-Namiq/bank-project-TailwindCss">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ backgroundImage: `url(${GPT3})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 mx-5">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    GPT3 Project <br />
                    Tailwind CSS & Next JS
                  </span>
                  <div className="pt-8 text-center">
                    <a href="https://gpt-3-project-s3vv.vercel.app/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/Shajwan-Namiq/GPT3_project">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ backgroundImage: `url(${Furniture})` }}
                className="shadow-lg p-2 shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className=" text-2xl font-bold text-white tracking-wider">
                    Capstone Project <br /> React JS & Tailwind CSS & API
                  </span>
                  <div className="pt-8 text-center">
                    <a href="https://my-capstone-app-furniture.vercel.app/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/Shajwan-Namiq/my-capstone-app">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ backgroundImage: `url(${WorkImg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 mx-5">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Metaversus Project <br /> Tailwind CSS & Framer Motion &
                    Next JS
                  </span>
                  <div className="pt-8 text-center">
                    <a href="https://metaversus-project-jknd.vercel.app/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/Shajwan-Namiq/Metaversus_project">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ backgroundImage: `url(${Dashboard})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider mx-5">
                    Dashboard Project <br />
                    Tailwind CSS & Next JS
                  </span>
                  <div className="pt-8 text-center">
                    <a href="https://dashboard-test-project-tau.vercel.app/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/Shajwan-Namiq/Dashboard_Test_Project">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
    </>
  );
}
