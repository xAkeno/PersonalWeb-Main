import React from 'react'
import ProjectBody from '../components/ComponentsProject/projectBody'
import ProjectBanner from '../components/ComponentsProject/projectBanner'
import Banner from '../components/banner'
import Footer from '../components/footer'
const project = () => {
  const title = "Projects";
  const des = "This is a page all the personal project I personally make for fun and school project."

  return (
    <div className='flex flex-col'>
      <Banner title={title} des={des}/>
      <ProjectBody/>
      <div className='mx-auto w-[50%] max-[579px]:w-[90%] h-auto
      max-[1375px]:w-[70%]
      max-[1175px]:grid-cols-2
      max-sm:grid-cols-1
      max-md:w-[95%]'>
        <Footer/>
      </div>
    </div>
  )
}

export default project
