import React from 'react'
import blackLogo from '../assets/black.png'
import { useNavigate } from "react-router-dom";
const menu = () => {
    const navigate = useNavigate();
  return (
    <nav
        id="menu"
        className="flex justify-between items-center bg-[#393939] px-[5px] pr-[10px] w-[50%] mx-auto rounded-[10px] border border-[#5c5b5b86] my-5 font-sans shadow-sm shadow-gray-900
        max-[1375px]:w-[70%]
        max-md:w-[80%]
        "
      >
        {/* Logo goes home */}
        <img
          src={blackLogo}
          alt="logo"
          className="h-12 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <ul className="flex list-none m-0 p-0">
          <li className="ml-6">
            <button
              onClick={() => navigate("/guest")}
              className="text-white no-underline hover:text-gray-300"
            >
              Guest Book
            </button>
          </li>
          <li className="ml-6">
            <button
              onClick={() => navigate("/projects")}
              className="text-white no-underline hover:text-gray-300"
            >
              Projects
            </button>
          </li>
          <li className="ml-6">
            <button
              onClick={() => navigate("/about")}
              className="text-white no-underline hover:text-gray-300"
            >
              About
            </button>
          </li>
          <li className="ml-6">
            <button
              onClick={() => navigate("/uses")}
              className="text-white no-underline hover:text-gray-300"
            >
              Uses
            </button>
          </li>
        </ul>
      </nav>
  )
}

export default menu
