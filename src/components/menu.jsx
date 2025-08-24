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

        <ul className="flex list-none m-0 p-0 gap-6 [&>li]:[&>button]:cursor-pointer [&>li]:[&>button]:hover:text-white [&>li]:[&>button]:text-gray-200" >
          <li>
            <button
              onClick={() => navigate("/guest")}
            >
              Guest Book
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/project")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/uses")}
            >
              Uses
            </button>
          </li>
          <li>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            </span>
          </li>
        </ul>
      </nav>
  )
}

export default menu
