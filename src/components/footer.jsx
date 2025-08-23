import React from 'react'

const footer = () => {
  return (
    <footer className="rounded-[15px] flex flex-col overflow-x-hidden mb-2">
        <div className="w-full h-40 bg-[#31313154] flex justify-center p-2.5">

            <div className="h-32 w-80 p-2.5 flex flex-col gap-2.5">
            <a href="#menu" className="text-white hover:text-gray-400">Home</a>
            <a href="/html/about.html" className="text-white hover:text-gray-400">About me</a>
            <a href="/html/guest.html" className="text-white hover:text-gray-400">Guest Book</a>
            </div>

            <div className="h-32 w-80 p-2.5 flex flex-col gap-2.5">
            <a href="/html/project.html" className="text-white hover:text-gray-400">Project</a>
            <a href="/html/uses.html" className="text-white hover:text-gray-400">Uses</a>
            <a href="/html/index.html" className="text-white hover:text-gray-400">Links</a>
            </div>

            <div className="h-32 w-80 p-2.5 flex flex-col gap-2.5">
            <a href="https://www.facebook.com/profile.php?id=100012184989320" target="_blank" className="text-white hover:text-gray-400">Facebook</a>
            <a href="https://github.com/xAkeno" target="_blank" className="text-white hover:text-gray-400">GitHub</a>
            <a href="https://steamcommunity.com/profiles/76561198333664827/" target="_blank" className="text-white hover:text-gray-400">Steam</a>
            </div>
        </div>

        <div className="flex items-center justify-center h-10 bg-black/50 text-white font-sans rounded-b-md">
            <p className="text-sm text-center">
            Copyright © 2025, Designed by Clark, Inspired by the creativity of HongHong.
            </p>
        </div>
    </footer>

  )
}

export default footer
