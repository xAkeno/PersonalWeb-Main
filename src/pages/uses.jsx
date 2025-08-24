import React from 'react'
import UsesBody from '../components/ComponentsUses/usesBody'
import Footer from '../components/footer'
import Banner from '../components/banner'
const uses = () => {
  const title = "Uses";
  const des = "This is my setup i used to play games, programming, Assignment and every day uses";
  return (
    <div>
      <Banner title={title} des={des}/>
      <div className='mx-auto w-[50%] max-[579px]:w-[90%] h-auto
        max-[1375px]:w-[70%]
        max-[1175px]:grid-cols-2
        max-sm:grid-cols-1
        max-md:w-[95%]'>
        <UsesBody/>
        <Footer/>
      </div>
    </div>
  )
}

export default uses
