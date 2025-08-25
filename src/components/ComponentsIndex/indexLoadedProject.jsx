import React from 'react'
import projectwall from '../../assets/projectwall.jpg'
const indexLoadedProject = (props) => {
  return (
    <div className='w-full h-auto border-1 border-[#383838] rounded-[15px] p-2 text-gray-800 dark:text-gray-300 shadow-lg' style={props.animate} key={props.name}>
        <h1 className='text-md my-1 flex items-center justify-between'>
            <span className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                Project
            </span>
            
            <span className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                <a href={props.link} target="_blank" className='underline'>
                    Project Link
                </a>
            </span>
        </h1>
        <div className="relative rounded-2xl p-1 overflow-hidden">
            <div className="rounded-xl overflow-hidden shadow-lg h-64 flex items-center justify-center p-5" style={{backgroundImage: `url(${projectwall})`,backgroundSize: "cover",backgroundPosition: "center",animation: "blur 0.3s linear"}}>
                <img 
                src={props.img} 
                className="w-full h-full rounded-[15px]" 
                alt="Project screenshot"
                />
            </div>
            <div className="mt-4">
                <h1 className="text-2xl font-semibold ">{props.name}</h1>
                <p className="text-md text-justify">{props.des}</p>
            </div>
            <div className="mt-3 flex gap-2 flex-wrap ">
                {
                    props.stack.map((item,index) => (
                        <span key={index} className="px-3 py-1 rounded-full bg-gray-300 dark:bg-gray-800 text-xs font-medium">{item}</span>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default indexLoadedProject
