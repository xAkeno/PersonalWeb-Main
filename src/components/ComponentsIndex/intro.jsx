import React from 'react'
import blackLogo from "../../assets/black.png";

const intro = () => {
  return (
    <div className="flex gap-[50px] p-[10px] max-[1130px]:flex-col max-[1130px]:items-center my-10">
        <div className="text-[30px] font-sans text-[#e4e4e4]"
          style={{ animation: "appear 0.3s linear" }}
        >
            <p>
            Hey, I'm Clark, an aspiring <strong>Java developer</strong> with a passion
            for creating websites, especially focusing on the backend.
            </p>
            <div>
              <button class="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className='relative px-5 py-2.5'>
                  View Projects
                </span>
              </button>
              <button class="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Resume
                </span>
              </button>
              <button class="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Contact Me
                </span>
              </button>
            </div>
        </div>
        <div className="intro-logo animate-appearlogo"
          style={{ animation: "appearlogo 0.4s linear" }}
        >
        <img
          src={blackLogo}
          alt="logo"
          className="rounded-full object-contain"
          style={{
            boxShadow: `
              0 0 75px violet,
              0 0 10px orange
            `
          }}
        />

        </div>
    </div>
  )
}

export default intro
