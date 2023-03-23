import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsBehance, BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { kurdish, English } from "../redux/languageSlice";
import { changeTheme } from "../redux/themeSlice";
import { Link } from "react-router-dom";
import { Translation } from "../i18n/i18n";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const isDark = useSelector((state) => state.theme.isDark);

  const [selectedLanguage, setSelectedLanguage] = useState("en"); //used for swapping language from dropdown menu

  const lang = useSelector((state) => state.language.data);
  // console.log(lang);
  const dispatch = useDispatch();

  //change language
  const changeLanguage = (event) => {
    dispatch(kurdish(event.target.value));
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <div class="bg-[#0a192f]">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20">
          <div class="relative flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" class="mr-10">
                <img src={Logo} alt="logo" className="w-14 h-14" />
              </a>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDark}
                  onChange={() => dispatch(changeTheme())}
                  value=""
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-600 rounded-full peer   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  light mode
                </span>
              </label>
            </div>
            <ul
              class={`items-center hidden space-x-8 lg:flex   ${
                lang === "ku" ? "md:flex flex-row-reverse" : "md:flex"
              }`}
            >
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:underline decoration-[#457b9d] ">
                <Link to="/" duration={500}>
                  {Translation(lang, "nav-home")}
                </Link>
              </li>

              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:underline decoration-[#457b9d] ">
                <Link to="/about" duration={500}>
                  {Translation(lang, "nav-about")}
                </Link>
              </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:underline decoration-[#457b9d] ">
                <Link to="/skills" duration={500}>
                  {Translation(lang, "nav-skills")}
                </Link>
              </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:underline decoration-[#457b9d] ">
                <Link to="/work" duration={500}>
                  {Translation(lang, "nav-work")}
                </Link>
              </li>

              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:underline decoration-[#457b9d] ">
                <Link to="/contact" duration={500}>
                  {Translation(lang, "nav-contact")}
                </Link>
              </li>
            </ul>

            {/* dropdown menu for changing language*/}
            <ul class="flex items-center hidden space-x-8 lg:flex">
              
              <li>
                <select
                  className="bg-slate-800 rounded px-4 text-white inline-flex items-center justify-center h-10  font-medium tracking-wide transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  value={selectedLanguage}
                  onChange={changeLanguage}
                >
                  <option
                    className="block px-4 py-2 hover:bg-gray-600 text-white"
                    value="en"
                  >
                    English
                  </option>
                  <option
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    value="ku"
                  >
                    کوردی
                  </option>
                </select>
              </li>
            </ul>

            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a href="/" class="inline-flex items-center">
                          <img src={Logo} alt="logo" className="w-14 h-14" />
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li className="">
                          <select
                            className="inline-flex items-center justify-center w-full bg-slate-900 rounded px-4 text-white h-10 font-medium tracking-wide transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            value={selectedLanguage}
                            onChange={changeLanguage}
                          >
                            <option className="" value="en">
                              English
                            </option>
                            <option className="" value="ku">
                              کوردی
                            </option>
                          </select>
                        </li>

                        <li>
                          <Link
                            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={handleClick}
                            to="/"
                            duration={500}
                          >
                            {Translation(lang, "nav-home")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={handleClick}
                            to="/about"
                            duration={500}
                          >
                            {Translation(lang, "nav-about")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={handleClick}
                            to="/skills"
                            duration={500}
                          >
                            {Translation(lang, "nav-skills")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={handleClick}
                            to="/work"
                            duration={500}
                          >
                            {Translation(lang, "nav-work")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={handleClick}
                            to="/contact"
                            duration={500}
                          >
                            {Translation(lang, "nav-contact")}
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
