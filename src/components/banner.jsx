import React from 'react'

const banner = (props) => {
  return (
    <div className="flex justify-center h-[18rem] pb-[2rem] items-end border-b border-gray-500 text-gray-900 dark:text-gray-300 shadow-md" >
        <div className='w-[50%] flex flex-col gap-2 max-[579px]:w-[90%] max-[1375px]:w-[70%] max-sm:w-[90%]' style={{ animation: "appear 0.3s linear" }}>
            <h1 className="text-6xl font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif]">
                {props.title}
            </h1>
            <p className="font-['Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Lucida_Sans',Arial,sans-serif] ">
                {props.des}
            </p>
        </div>
    </div>
  )
}

export default banner
