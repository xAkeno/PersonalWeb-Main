import React from 'react'

const indexReach = () => {
  return (
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-[#383838] rounded-lg p-5 mb-[10rem] my-10 ">
        <div class="md:flex gap-x-24 clear-left ">
            <div class=" md:mb-0 mb-4">
                <h2 class="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center dark:text-white">Get In Touch</h2>
                <p class=" text-lg font-normal leading-7 mb-7 md:text-left text-center dark:text-[rgb(204,202,202)]">Have a question, a project idea, or just want to say hi? I’d love to hear from you.</p>
                <div class="flex md:items-center md:justify-start justify-center">
                    <a href="mailto:clarkkentraguhos@gmail.com"><button class="w-36 h-12 rounded-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium leading-6 cursor-pointer">Contact Me</button></a>
                </div>
            </div>
            <div class="border-l-2 border-indigo-600 px-10 py-6 bg-[#47474728] rounded-l-2xl">
                <div class="mb-8">
                    <h6 class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center dark:text-white">Email Address</h6>
                    <h3 class="text-black text-xl font-semibold leading-8 md:text-start text-center dark:text-[rgb(204,202,202)]">clarkkentraguhos@gmail.com</h3>
                </div>
                <div>
                    <h6 class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center dark:text-white">Phone Number</h6>
                    <h3 class="text-black text-xl font-semibold leading-8 md:text-start text-center dark:text-[rgb(204,202,202)]">(63+) 09260143365</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default indexReach
