import React from "react";
  import { useSelector } from "react-redux";


export default function About() {
       const isDark = useSelector((state) => state.theme.isDark);

  return (
    <>
      <div
        name="about"
        className={`w-full h-screen  text-gray-300
     ${isDark ? "bg-white text-black" : "bg-[#0a192f]"}`}
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#457b9d]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I'm Clint, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className="mt-2">
                I am a self-taught front-end developer and also a hard worker.
                Furthermore, I can work with a team to create a new website from
                scratch. I primarily focus on writing clean, elegant, and
                efficient code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
