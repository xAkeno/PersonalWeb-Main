import React from 'react'
import AboutLoaded from './aboutLoaded'
import {aboutStack} from './aboutStack'
const aboutContent = () => {

  return (
    <div className="center mx-auto flex flex-col gap-8 animate-[appear_0.3s_linear] my-[5rem] text-gray-800 dark:text-gray-300">
    <div className="who ">
        <h2 className=" text-2xl mb-2 font-semibold">
        WHO AM I
        </h2>
        <p>
            I'm <b>Clark Kent Raguhos</b>, an aspiring <b>Java developer</b> who can also do full stack development 
            with <b>React</b> and <b>Spring Boot</b>. I'm 20 years old and currently studying at the <b>University of Makati</b>, 
            taking a <b>Diploma in Application Development</b>.
        </p>
    </div>
    <h1 className='text-4xl text-center text-gray-800 dark:text-gray-300 mt-[2rem]'>Technical Skills</h1>
    <div className='grid grid-cols-2 gap-2 max-[1200px]:grid-cols-1'>
        {aboutStack.map((item, i) => (
          <AboutLoaded
            key={i}
            title={item.title}
            img={item.img}
            stack={item.stack}
          />
        ))}
    </div>

    {/* ABOUT */}
    <div className="about">
        <h2 className=" text-2xl mb-2">
        About this website
        </h2>
        <ul className="pop list-disc pl-6">
            <li>ReactJs</li>
            <li>TailWindCSS</li>
            <li>JavaScript</li>
            <li>FlowBite</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </div>

    <div className="link">
        <h2 className=" text-2xl mb-2">
        Social Link
        </h2>
        <ul className="list-disc pl-6">
        <li>Linkedin</li>
        <li>JobStreet</li>
        <li>GitHub</li>
        <li>Facebook</li>
        </ul>
    </div>
    </div>

  )
}

export default aboutContent
