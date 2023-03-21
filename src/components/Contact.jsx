import React from "react";
import { useSelector } from "react-redux";

export default function Contact() {
  const isDark = useSelector((state) => state.theme.isDark);
  
  return (
    <>
      <div
        name="contact"
        className={`flex justify-center items-center px-4 pt-20 
       ${isDark ? "bg-white text-slate-900" : "bg-[#0a192f] text-gray-300 "}`}
      >
        <form
          method="POST"
          action="https://getform.io/f/bf802d42-a43d-42db-964e-94f072a5e588"
          className="mt-5 flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#457b9d] ">
              Contact
            </p>
            <p className="py-4">
              Submit the form below or shoot me an email -
              shajwannamiqsalh@gmail.com
            </p>
          </div>
          <input
            className=" border-2 text-black p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2  border-2 text-black"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className=" border-2 text-black p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>

         

          <button className="w-full border-2 hover:bg-[#457b9d] hover:border-[#457b9d] px-4 py-3 my-8 mx-auto flex items-center justify-center font-bold">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
