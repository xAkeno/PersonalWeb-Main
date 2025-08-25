import React from 'react'
import { projectdata } from './projectdata'
import IndexLoadedProject from '../ComponentsIndex/indexLoadedProject'
const projectBody = () => {
    
  return (
    <div className='grid grid-cols-3 mx-auto gap-2 pt-[2rem] mb-[10rem] w-[50%] max-[579px]:w-[90%] h-auto
      max-[1375px]:w-[70%]
      max-[1175px]:grid-cols-2
      max-sm:grid-cols-1
      max-md:w-[95%]
      
      '>
        {
            projectdata.map((item,index) => (<IndexLoadedProject name={item.name} des={item.description} img={item.image} stack={item.tech} link={item.link}/>))
        }
    </div>
  )
}

export default projectBody
