import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsBehance, BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { kurdish, English } from "../redux/languageSlice";
import MenuEnglish, { MenuMobile } from "./MenuEnglish";
import MenuKurdish, { MenuMobileKurdish } from "./MenuKurdish";
import { changeTheme } from "../redux/themeSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const isDark = useSelector((state) => state.theme.isDark);

  const [selectedLanguage, setSelectedLanguage] = useState("en"); //used for swapping language from dropdown menu

  const languageE = useSelector((state) => state.language.data);
  const dispatch = useDispatch();

  // console.log(languageE);

  //change language
  const changeLanguage = (event) => {
    dispatch(kurdish(event.target.value));
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="flex justify-center items-center">
        <div>
          <img src={Logo} alt="logo" className="w-20 h-20" />
        </div>
      </div>

      <div className="flex items-center">
        {/* menu */}
        <div>
          {languageE === "en" ? (
            <MenuEnglish smoot={true} />
          ) : (
            <MenuKurdish smoot={true} />
          )}
        </div>

        {/* {change theme} */}
        <div>
          <input
            type="checkbox"
            checked={isDark}
            onChange={() => dispatch(changeTheme())}
          />
          <labe>
            light theme
          </labe>
        </div>
        {/* dropdown menu for changing language*/}
        <div>
          <ul>
            <li>
              <select
                className="bg-slate-800 rounded-sm hover:bg-slate-700 p-1 text-white"
                value={selectedLanguage}
                onChange={changeLanguage}
              >
                <option value="en">English</option>
                <option value="ku">کوردی</option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      {languageE === "en" ? (
        <MenuMobile smoot={true} handleClick={handleClick} nav={nav} />
      ) : (
        <MenuMobileKurdish smoot={true} handleClick={handleClick} nav={nav} />
      )}

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#457b9d]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/shajwan-namiq-5bb90020b/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#292828]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Shajwan-Namiq"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ae251b]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZXhHDFCpHCxssgZGcvGCFbPjtRcdzDhCQMzBrjzbPfBVvBWzGqDghnrVzfNgPcCQmcBML"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1e3c9c]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.behance.net/shajwannamiq"
            >
              Behance <BsBehance size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4a7649]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
