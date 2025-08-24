import React from 'react'

const projectBanner = () => {
  return (
    <div className="flex justify-center h-[18rem] pb-[2rem] items-end border-b border-gray-500 " >
        <div className='w-[50%] flex flex-col gap-2 max-[579px]:w-[90%] max-[1375px]:w-[70%] max-sm:w-[90%]' style={{ animation: "appear 0.3s linear" }}>
            <h1 className="text-6xl font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] text-[whitesmoke]">
                Projects
            </h1>
            <p className="font-['Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Lucida_Sans',Arial,sans-serif] text-[whitesmoke]">
                This is a page all the personal project I personally make for fun and school project.
            </p>
        </div>
    </div>
  )
}

export default projectBanner
