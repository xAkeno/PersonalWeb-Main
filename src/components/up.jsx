import React from 'react'
import arrowUp from "../assets/arrow-up.png";
const up = () => {
  return (
    <div className="bg-[#585757] rounded-full fixed h-[50px] w-[50px] bottom-5 right-5 hover:bg-[#6e6e6e] flex items-center justify-center cursor-pointer">
        <a href="#menu">
            <img src={arrowUp} alt="up" className="h-[50px]" />
        </a>
    </div>
  )
}

export default up
