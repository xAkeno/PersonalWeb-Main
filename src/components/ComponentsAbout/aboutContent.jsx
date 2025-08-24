import React from 'react'

const aboutContent = () => {

  return (
    <div className="center mx-auto flex flex-col gap-8 animate-[appear_0.3s_linear] my-[5rem]">
    {/* WHO AM I */}
    <div className="who text-[rgb(207,204,204)]">
        <h2 className="text-[rgb(194,191,191)] text-2xl mb-2">
        WHO AM I
        </h2>
        <p>
            I'm an aspiring Java developer but can also do full stack development with
            React and Spring Boot. I'm 20 and studying at UMAK. I enjoy creating
            websites using Spring Boot and JavaScript.
        </p>
    </div>

    {/* ABOUT */}
    <div className="about text-[rgb(207,204,204)]">
        <h2 className="text-[rgb(194,191,191)] text-2xl mb-2">
        About this website
        </h2>
        <ul className="pop text-[rgb(207,204,204)] list-disc pl-6">
            <li>ReactJs</li>
            <li>TailWindCSS</li>
            <li>JavaScript</li>
            <li>FlowBite</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </div>

    <div className="link">
        <h2 className="text-[rgb(194,191,191)] text-2xl mb-2">
        Social Link
        </h2>
        <ul className="list-disc pl-6 text-[rgb(207,204,204)]">
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
