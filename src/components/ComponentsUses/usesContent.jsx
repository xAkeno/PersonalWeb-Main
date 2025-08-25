import React from 'react'
import laptop from "../../assets/laptop-removebg-preview.png";
import phone from "../../assets/phone.png";
import airpods from "../../assets/airpods.png";
import monitor from "../../assets/monitor-removebg-preview.png";
import mouse from "../../assets/mouse-removebg-preview (1).png";
import keyboard from "../../assets/keyboard-removebg-preview.png";
import stand from "../../assets/stand-removebg-preview.png";
import ssd from "../../assets/ssd-removebg-preview.png";
import vs from "../../assets/vs.jpg";
import intel from "../../assets/intel2.png";
import jwt from "../../assets/jwt.png";
import xamp from "../../assets/xamp.png";
import live from "../../assets/live.png";
import postman from "../../assets/postman-icon-svgrepo-com.png";
import discord from "../../assets/disc.png";
import chrome from "../../assets/chrome.png";
import gpt from "../../assets/gpt.png";
import photo from "../../assets/photo.png";
import word from "../../assets/word.png";
import git from "../../assets/git.png"
import azure from "../../assets/azuredatastudio.png"
import android from "../../assets/android.png"
import background from "../../assets/background.jpg";
import brave from "../../assets/brave.png";
import linux from "../../assets/linux.png"
import gitpc from "../../assets/gitpc.png"
const usesContent = () => {
  return (
    <div class="w-[100%] mx-auto flex flex-col space-y-8 text-gray-800 dark:text-gray-300">
        <p class=" text-xl font-sans text-center">Laptop</p>
        <div
            class="mt-2 w-full h-[30rem] bg-[url('/image/background.jpg')] bg-cover flex justify-center items-center rounded-md"
            style={{backgroundImage: `url(${background})`}}
        >
            <img
            src={laptop}
            alt="tuf laptop"
            class="h-[90%] w-auto"
            style={{ animation: "blur 0.3s linear"}}
            />
        </div>
        <p class=" font-sans">Asus TUF Gaming FX505GE</p>

        <div>
            <h1
            class=" text-2xl font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif]"
            >
            Accessories
            </h1>
            <div class="flex gap-5 mt-3">
            <div
                class="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-60 w-48 flex flex-col"
            >
                <img src={phone} alt="realme 10s" class="h-40 mx-auto" />
                <p class="px-2 font-sans">
                <span class="">Redmi note 10s</span><br />64gb, Black
                </p>
            </div>
            <div
                class="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-60 w-48 flex flex-col"
            >
                <img src={airpods} alt="airpods" class="h-40 mx-auto" />
                <p class="px-2 font-sans">
                <span class="">HUAWEI Freebuds Pro</span>
                </p>
            </div>
            </div>
        </div>

        <div>
            <h1
            class=" text-2xl font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] mb-3"
            >
            PC Hardware
            </h1>
            <div class="grid grid-cols-5 gap-5">
            <div
                class="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans"
            >
                <img
                src={monitor}
                class="h-40 w-full mb-2"
                />
                <span>ASUS ROG PG27VQ</span>
            </div>
            <div
                class="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans"
            >
                <img src={mouse} class="h-40 w-full" />
                <span>Glorious Model O</span>
            </div>
            <div
                class="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans"
            >
                <img src={keyboard} class="h-40 w-full" />
                <span>K70 Lux Corsair</span>
            </div>
            <div
                class="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans"
            >
                <img src={stand} class="h-40 w-full" />
                <span>LAPTOP-RISER-BAR</span>
            </div>
            <div
                class="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans"
            >
                <img src={ssd} class="h-40 w-full" />
                <span>APACER M.2 PCIE 256GB</span>
            </div>
            </div>
        </div>

        <div>
            <h1
            class=" text-2xl font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] mb-3"
            >
            Coding
            </h1>
            <div class="grid grid-cols-5 gap-5">
                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={vs} alt="Visual Code" className="h-40 w-full mb-2 rounded-xl" />
                    <span>Visual Code</span>
                </div>

                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={intel} alt="IntelliJ" className="h-40 w-full mb-2" />
                    <span>IntelliJ</span>
                </div>

                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={android} alt="Android" className="h-40 w-full mb-2" />
                    <span>Android</span>
                </div>

                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={git} alt="Git" className="h-40 w-full mb-2" />
                    <span>Git</span>
                </div>

                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={jwt} alt="JWT" className="h-40 w-full mb-2" />
                    <span>JWT</span>
                </div>
                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={azure} alt="Azure Data Studio" className="h-40 w-full mb-2 rounded-xl" />
                    <span>Azure Data Studio</span>
                </div>

                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={xamp} alt="Xampp" className="h-40 w-full mb-2 rounded-xl" />
                    <span>Xampp</span>
                </div>

                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={live} alt="Live Server" className="h-40 w-full mb-2" />
                    <span>Live Server</span>
                </div>
            </div>
        </div>

        <div class="mb-20">
            <h1
            class=" text-2xl font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] mb-3"
            >
            Software
            </h1>
            <div class="grid grid-cols-5 gap-5">
                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={linux} alt="Linux" className="h-40 w-full mb-2" />
                    <span>Linux (Fedora)</span>
                </div>
                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={postman} alt="Postman" className="h-40 w-full mb-2" />
                    <span>Postman</span>
                </div>
                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={gitpc} alt="GitHub Desktop" className="h-40 w-full mb-2" />
                    <span>GitHub Desktop</span>
                </div>
                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={discord} alt="Discord" className="h-40 w-full mb-2 rounded-full" />
                    <span>Discord</span>
                </div>

                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={chrome} alt="Chrome" className="h-40 w-full mb-2" />
                    <span>Chrome</span>
                </div>
                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={brave} alt="Brave" className="h-40 w-full mb-2" />
                    <span>Brave</span>
                </div>
                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={gpt} alt="Chat GPT" className="h-40 w-full mb-2" />
                    <span>Chat GPT</span>
                </div>

                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={photo} alt="Photoshop" className="h-40 w-full mb-2" />
                    <span>Photoshop</span>
                </div>

                <div className="bg-gray-100 shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-gray-200 rounded-xl h-56 w-44 flex flex-col p-2 text-center  font-sans">
                    <img src={word} alt="Word" className="h-40 w-full mb-2" />
                    <span>Word</span>
                </div>

            </div>
        </div>
        </div>

  )
}

export default usesContent
