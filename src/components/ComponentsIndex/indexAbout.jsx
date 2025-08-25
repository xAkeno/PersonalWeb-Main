import React from 'react'
import IndexAboutContainer from './indexAboutContainer'
import { useNavigate } from 'react-router-dom'
const indexAbout = () => {
  const navigate = useNavigate();
  return (
    <div className='h-full flex flex-col gap-3 my-10 text-gray-800 dark:text-gray-300'>
          <h1 className="text-center text-3xl font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif]">
              About me
              <hr className='w-[14%] mx-auto border-purple-600 border-2 rounded-t-full shadow-[0_-10px_12px_rgb(155,48,255)]'/>
          </h1>
        <IndexAboutContainer/>
        <div className="button-project flex justify-center">
          <button  onClick={() => {
            navigate("/about"); 
            window.scrollTo(0, 0);}} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 cursor-pointer">
              Know more about me
          </button>
        </div>
    </div>
  )
}

export default indexAbout
