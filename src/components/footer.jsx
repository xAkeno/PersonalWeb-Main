import React from 'react'
import { useNavigate } from 'react-router-dom'

const footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="rounded-[15px] flex flex-col overflow-x-hidden mb-2 border border-[#383838]">
        <div className="[&>div]:[&>a]:cursor-pointer w-full h-40 dark:bg-[#31313154] backdrop-blur-2xl bg-gray-200/60  flex justify-center p-2.5 text-gray-800 dark:text-gray-300">

            <div className="h-32 w-80 p-2.5 flex flex-col gap-2.5">
              <a onClick={() => {
                navigate("/")
                window.scrollTo(0,0)
              }} className='hover:underline dark:hover:text-white'>Home</a>
              <a onClick={() => {navigate("/about");window.scrollTo(0,0)}} className='hover:underline dark:hover:text-white'>About</a>
              <a onClick={() => {navigate("/project");window.scrollTo(0,0)}} className='hover:underline dark:hover:text-white'>Project</a>
            </div>

            <div className="h-32 w-80 p-2.5 flex flex-col gap-2.5">
              <a onClick={() => {navigate("/uses");window.scrollTo(0,0)}} className='hover:underline dark:hover:text-white'>Uses</a>
              <a href="https://www.linkedin.com/in/clarkkentraguhos/" target="_blank" className='hover:underline dark:hover:text-white'>LinkedIn</a>
              <a href="https://ph.jobstreet.com/profile/clarkkent-raguhos-c7jSn92snG" target="_blank" className='hover:underline dark:hover:text-white'>JobStreet</a>
            </div>

            <div className="h-32 w-80 p-2.5 flex flex-col gap-2.5">
              <a href="https://profile.indeed.com/p/clarkkentr-58xs1b9" target="_blank" className='hover:underline dark:hover:text-white'>Indeed</a>
              <a href="https://github.com/xAkeno" target="_blank" className='hover:underline dark:hover:text-white'>GitHub</a>
              <a href="https://www.facebook.com/profile.php?id=100012184989320" target="_blank" className='hover:underline dark:hover:text-white'>Facebook</a> 
            </div>
        </div>

        <div className="flex items-center justify-center h-10 dark:bg-[#31313154] backdrop-blur-2xl bg-gray-200/60  font-sans rounded-b-md">
            <p className="text-sm text-center text-gray-800 dark:text-white">
            Copyright © 2025, Designed by Clark, Inspired by the creativity of HongHong.
            </p>
        </div>
    </footer>

  )
}

export default footer
