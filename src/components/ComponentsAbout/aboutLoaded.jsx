import React from 'react'
const aboutLoaded = (props) => {
  return (
    <div className='flex gap-3 w-full font-medium text-gray-900 p-3 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'>
      <img src={props.img} alt="" className='w-43 max-md:w-34'/>
      <div className='pl-2 w-[100%]'>
        <h1 className='mb-2 bg-green-100 text-green-800 text-lg font-medium text-center px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300'>{props.title}</h1>
        <ul className='grid grid-cols-2 list-disc max-md:text-sm'>
            {props.stack.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default aboutLoaded
