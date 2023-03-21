import React from 'react'
import { Link } from "react-router-dom";

export default function MenuKurdish({smooth}) {
  return (
    <>
      <ul className=" hidden md:flex md:flex-row-reverse justify-center items-center">
        <li className="hover:underline decoration-[#457b9d]">
          <Link to="/" smooth={smooth} duration={500}>
            سەرەتا
          </Link>
        </li>
        <li className="hover:underline decoration-[#457b9d]">
          <Link to="/about" smooth={smooth} duration={500}>
            دەربارەی
          </Link>
        </li>
        <li className="hover:underline decoration-[#457b9d]">
          <Link to="/skills" smooth={smooth} duration={500}>
            شارەزای
          </Link>
        </li>
        <li className="hover:underline decoration-[#457b9d]">
          <Link to="/work" smooth={smooth} duration={500}>
            ئیش
          </Link>
        </li>
        <li className="hover:underline decoration-[#457b9d]">
          <Link to="/contact" smooth={smooth} duration={500}>
            پەیوەندی
          </Link>
        </li>{" "}
      </ul>
    </>
  );
}




export function MenuMobileKurdish({ smooth, handleClick, nav }) {
  return (
    <>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:underline decoration-[#457b9d]">
          <Link onClick={handleClick} to="/" smooth={smooth} duration={500}>
            سەرەتا
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline decoration-[#457b9d]">
          <Link
            onClick={handleClick}
            to="/about"
            smooth={smooth}
            duration={500}
          >
            دەربارەی
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline decoration-[#457b9d]">
          {" "}
          <Link
            onClick={handleClick}
            to="/skills"
            smooth={smooth}
            duration={500}
          >
            شارەزای
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline decoration-[#457b9d]">
          {" "}
          <Link onClick={handleClick} to="/work" smooth={smooth} duration={500}>
            ئیش
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline decoration-[#457b9d]">
          {" "}
          <Link
            onClick={handleClick}
            to="/contact"
            smooth={smooth}
            duration={500}
          >
            پەیوەندی
          </Link>
        </li>
      </ul>
    </>
  );
}
