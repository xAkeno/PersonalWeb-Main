import React from 'react'
import Intro from './intro'
import IndexAbout from './indexAbout'
import IndexProject from './indexProject'
import IndexReach from './indexReach'
import Footer from '../footer'
const indexBody = () => {
  return (
    <div className="w-[50%] max-[579px]:w-[90%] h-auto mx-auto flex flex-col 
      max-[1375px]:w-[70%]
      max-md:w-[95%]
    ">
        <Intro />
        <IndexProject/>
        <IndexAbout/>
        <IndexReach/>
        <Footer/>
    </div>
  )
}

export default indexBody
