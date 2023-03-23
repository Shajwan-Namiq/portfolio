import React from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Translation } from "../i18n/i18n";

//home page
export default function Home() {
  const lang = useSelector((state) => state.language.data);
  const isDark = useSelector((state) => state.theme.isDark);
  // console.log(isDark)

  return (
    <div
      name="home"
      className={`w-full h-full ${isDark ? "bg-white" : "bg-[#0a192f]"}`}
    >
      {/* Container */}

      <div
        className={` max-w-[1000px] mx-auto px-8 flex flex-col justify-center min-h-screen ${
          lang === "en" ? "items-start" : "items-end"
        }`}
      >
        <p className="-mt-32 text-[#457b9d]"> {Translation(lang, "home-top")}</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          {Translation(lang, "home-name")}
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#b392ac]">
          {Translation(lang, "home-job")}
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px] flex justify-end">
          {Translation(lang, "home-desc")}
        </p>

        <div>
          <div className="w-40 cursor-pointer">
            <Link
              to="/work"
              className="text-white group border-2   py-3 flex justify-center items-center  bg-[#457b9d]  hover:bg-slate-900 hover:border-[#f2f2f2] "
            >
              {lang === "en" ? (
                <>
                  {Translation(lang, "home-btn")}
                  <span className="group-hover:rotate-90 duration-300 ">
                    <HiArrowNarrowRight className="ml-7 " />
                  </span>
                </>
              ) : (
                <>
                  <span className="group-hover:-rotate-90 duration-300 ">
                    <HiArrowNarrowLeft className="mr-7 " />
                  </span>{" "}
                  {Translation(lang, "home-btn")}
                </>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
