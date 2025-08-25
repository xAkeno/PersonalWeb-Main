import React from 'react'
import locationPin from "../../assets/location-pin.png";
import mapPng from "../../assets/map.png";
import connectIcon from "../../assets/pngfind.com-connection-icon-png-6603836.png";
import facebookIcon from "../../assets/facebook.png";
import xIcon from "../../assets/x.png";
import instagramIcon from "../../assets/instagram.png";
import gitIcon from "../../assets/git.jpg";
import javaIcon from "../../assets/java.png";
import jsIcon from "../../assets/javascript.png";
import pythonIcon from "../../assets/python.png";
import springIcon from "../../assets/spring.png";
import mysqlIcon from "../../assets/mysql.png";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import postIcon from "../../assets/post.png";
import vscodeIcon from "../../assets/vscode.png";
import intellijIcon from "../../assets/intel.jpg";
import favGameMark from "../../assets/favgame-removebg-preview.png";
import favGame from "../../assets/favgame.png";
import heart2 from "../../assets/heart (2).png";
import springFav from "../../assets/springfav.png";

import spring from "../../assets/spring.png";
import linux from "../../assets/linux.png";
import dart from "../../assets/dart.png";
import docker from "../../assets/docker.png";
import maven from "../../assets/maven.png";
import websocket from "../../assets/websocket.png";
import azure from "../../assets/azure.png";
import react from "../../assets/react.png";
import php from "../../assets/php.png";


import linkedin from "../../assets/linkedin.png";
import jobstreet from "../../assets/jobstreet.png";
import godot from "../../assets/godot.png";
import rest from "../../assets/rest.png";
import git from "../../assets/git.png";
import more from "../../assets/more.png"
import tailwind from "../../assets/tailwind.png";
import csharp from "../../assets/csharp.png";

const indexAboutContainer = () => {

    // const stack = [javaIcon, jsIcon, pythonIcon, springIcon, mysqlIcon, htmlIcon, cssIcon, postIcon, vscodeIcon, intellijIcon,intellijIcon,intellijIcon];

    const stack = [
        { name: "Java", icon: javaIcon },
        { name: "Spring Boot", icon: springIcon },
        { name: "ReactJS", icon: react },
        { name: "TailwindCSS", icon: tailwind },
        { name: "C#", icon: csharp },
        { name: "PHP", icon: php },
        { name: "Dart", icon: dart },
        { name: "JavaScript", icon: jsIcon },
        { name: "MySQL", icon: mysqlIcon },
        { name: "Linux (Fedora)", icon: linux },
        { name: "Git", icon: git },
        { name: "Docker", icon: docker },
        { name: "Azure", icon: azure },
        { name: "RestAPI", icon: rest },
        { name: "Maven", icon: maven },
        { name: "WebSocket", icon: websocket },
        { name: "Godot", icon: godot },
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "More...", icon: more },
    ];
    const contact = [
        {icon:linkedin,siteName:"LinkedIn",link:"https://www.linkedin.com/in/clarkkentraguhos/"},
        {icon:jobstreet,siteName:"JobStreet",link:"https://ph.jobstreet.com/profile/clarkkent-raguhos-c7jSn92snG"},
        {icon:gitIcon,siteName:"GitHub",link:"https://github.com/xAkeno"},
        {icon:facebookIcon,siteName:"Facebook",link:"https://www.facebook.com/clark.raguhos/"},
    ];

  return (
    <div className="flex h-full w-full gap-2.5 max-[1130px]:flex-col">
        {/* Left */}
            <div className="flex flex-col w-full h-[35rem] gap-2.5 text-gray-800 dark:text-gray-300  ">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4580.7810112648685!2d121.04267807574072!3d14.557182678136941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8f9d64c9219%3A0x64a2ce5d895d49d7!2sPitogo%2C%20Taguig%2C%20Metro%20Manila!5e1!3m2!1sen!2sph!4v1755924058183!5m2!1sen!2sph"
                className="w-full h-[100%] border-0 rounded-xl shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="h-[45%] p-[10px] border border-[#383838] rounded-[15px] shadow-lg">
                    <p className=" flex items-center">
                        <img src={connectIcon} alt="" className="h-5 mr-2.5" />
                        Connect with me
                    </p>
                    <div className='pl-2 flex flex-col gap-2 '>
                        {
                            contact.map((item,index) => (
                                <a href={item.link} target="_blank" className=" flex items-center" key={index}>
                                    <img src={item.icon} alt="" className="h-10 mr-2.5 rounded-2xl" />
                                    {item.siteName}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>

        {/* Right */}
        <div className="w-full  ">
            <div className='rounded-[15px] min-h-[24rem] border border-[#383838] mb-2.5 flex flex-col shadow-lg justify-center items-center'>
                <h1 className='text-black dark:text-gray-50 text-2xl font-bold flex mb-1'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circuit-board-icon lucide-circuit-board"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M11 9h4a2 2 0 0 0 2-2V3"/><circle cx="9" cy="9" r="2"/><path d="M7 21v-4a2 2 0 0 1 2-2h4"/><circle cx="15" cy="15" r="2"/></svg>
                    </span>
                    Tech Stacks
                </h1>
                <div className='grid grid-cols-5 max-[755px]:grid-cols-4 gap-5'>
                    {stack.map(
                    (item, idx) => (
                        <div className="relative inline-block group bg-white p-3 rounded-xl shadow-md">
                            <img
                                src={item.icon}
                                className="h-10 w-10 transition-transform duration-200 ease-in-out transform group-hover:scale-125"
                            />

                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max  font-semibold
                                            rounded-lg bg-gray-800 text-white text-sm 
                                            px-3 py-1 opacity-0 group-hover:opacity-100 
                                            transition-opacity duration-300 shadow-lg">
                                {item.name}
                            </div>
                        </div>)
                    )}
                </div>
            </div>
            {/* Bottom-right cards */}
            <div className=" h-[30%] flex gap-2.5 [&>div]:shadow-lg">
                <div className="w-full border border-[#383838] rounded-[10px] flex flex-col p-5 font-sans">
                    <span className="text-[18px] font-bold  flex items-center mb-[30px] gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-graph-icon lucide-git-graph"><circle cx="5" cy="6" r="3"/><path d="M5 9v6"/><circle cx="5" cy="18" r="3"/><path d="M12 3v18"/><circle cx="19" cy="6" r="3"/><path d="M16 15.7A9 9 0 0 0 19 9"/></svg>
                        Total Commit
                    </span>
                    <center>
                        <h1 className='text-2xl font-bold '>195 Commit</h1>
                    </center>
                </div>
                <div className="w-full border border-[#383838] rounded-[10px] font-bold flex flex-col p-5 font-sans">
                    <span className="text-[18px] mb-[30px] flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg> Fav Framework
                    </span>
                    <img src={springFav} alt="" className="h-10 w-full" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default indexAboutContainer
