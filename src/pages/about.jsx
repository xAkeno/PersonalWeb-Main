import React from 'react'
import Banner from '../components/banner';
import Footer from '../components/footer';
import AboutBody from '../components/ComponentsAbout/aboutBody'
const about = () => {
    const title = "About me";
    const des = "👋 Hello! I'm Clark, a passionate developer who loves building websites and applications."
  return (
    <div>
      <Banner title={title} des={des}/>
      <div className='mx-auto w-[50%] max-[579px]:w-[90%] h-auto
        max-[1650px]:w-[70%]
        max-[1175px]:grid-cols-2
        max-sm:grid-cols-1
        max-md:w-[95%]'>
        <AboutBody/>
        <Footer/>
      </div>
    </div>
  )
}

export default about
