import React from 'react'
import blackLogo from '../assets/blacklogonoback.png'
import logonoback from '../assets/logonoback.png'
import Theme from './theme';
import { useNavigate } from "react-router-dom";
const menu = () => {
    const navigate = useNavigate();
  return (
    <nav
        id="menu"
        className="flex justify-between items-center  dark:bg-[#393939]/60  backdrop-blur-2xl px-[5px] pr-[10px] w-[50%] mx-auto rounded-[10px] border border-[#5c5b5b86] my-5 font-sans shadow-sm shadow-gray-900
        max-[1375px]:w-[70%]
        max-md:w-[95%]
        
        "
      >
        {/* Logo goes home */}
        <img
          src={logonoback}
          alt="logo"
          className="h-12 cursor-pointer dark:hidden"
          onClick={() => navigate("/")}
        />
        <img
          src={blackLogo}
          alt="logo"
          className="h-12 cursor-pointer hidden dark:block"
          onClick={() => navigate("/")}
        />

        <ul className="flex items-center list-none m-0 p-0 gap-6 text-lg max-[450px]:text-sm [&>li]:[&>button]:font-medium [&>li]:[&>button]:cursor-pointer [&>li]:[&>button]:hover:dark:text-white [&>li]:[&>button]:dark:text-gray-200 " >
          <li>
            <button
              onClick={() => navigate("/")}
            >
              Home
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
          <li className='flex items-center justify-center'>
            <Theme/>
          </li>
        </ul>
      </nav>
  )
}

export default menu
