import React from 'react'
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import IndexLoadedProject from './indexLoadedProject'
import { useNavigate } from 'react-router-dom'
const indexProject = () => {
    const navigate = useNavigate();
    const friendoName = "Friendo";
    const friendoDes = "Friendo is a social media app built with React, Spring Boot, and WebSocket. It enables real-time communication and represents my growth as a full stack developer."
    const friendoStack = ["Spring Boot","Spring Security","Spring MVC","ReactJS","TailwindCSS","MySQL","Azure","WebSocket","Axios","JWT"];

    const westName = "West Rembo Announcement Site"
    const westStack = ["PHP","MySQL","HTML","TailWindCSS","Figma","FlowBite"];
    const westDes = "This website shares official announcements, events, and updates for the West Rembo community, serving as an information hub to keep residents connected and informed.";
  return (
    <div className='w-full h-full flex flex-col gap-3 mb-10'
    >
        <h1 className="text-center text-[rgb(204,202,202)] text-3xl font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif]">
            Selected Projects
            <hr className='w-[25%] mx-auto border-purple-600 border-2 rounded-t-full shadow-[0_-10px_12px_rgb(155,48,255)]'/>
        </h1>
        <div className='w-full h-full flex flex-row max-[600px]:flex-col gap-3'>
            <IndexLoadedProject name={friendoName} des={friendoDes} stack={friendoStack} img={project1} animate={{ animation: "appear 0.4s linear" }}/>
            <IndexLoadedProject name={westName} des={westDes} stack={westStack} img={project2} animate={{ animation: "appear2 0.4s linear" }}/>
        </div>
        <div className="button-project flex justify-center">
            <button  onClick={() => {
                navigate("/project")
                window.scrollTo(0, 0);
            }} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 cursor-pointer">
                See all projects
            </button>
        </div>
    </div>
  )
}

export default indexProject
