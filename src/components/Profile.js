import Image from 'next/image'
import React from 'react'
import deved from "./../../public/dev-ed-wave.png";
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
function Profile() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 md:flex-row md:justify-between  md:items-start gap-3">  
       <div className='flex flex-col justify-end items-start gap-4 md:pt-12 md:pl-7 animate-slideDown'>
          <h2 className=" text-teal-600 font-medium dark:text-teal-400 md:text-3xl -m-1">
            THET HTET SOE
          </h2>
        
          <div className="text-md text-teal-400">
            MERN 
            <span className='pl-1 text-teal-500'>
              STACK Developer
            </span>
          </div>
           <div className=" border-white border-l-2 pl-2 text-sm leading-8  dark:text-white text-teal-400 max-w-xl  md:text-md md:mt-5">
            Pursuing happiness, one line of code at a time. <br></br>
            Building powerful web solutions from data to design — one stack, one vision, full throttle
          </div>
        
          {/* <div className="text-3xl md:text-5xl flex justify-center gap-12 py-3 text-gray-600 dark:text-gray-400">
            <AiFillFacebook />
            <AiFillLinkedin />
          </div> */}
        </div>
        <div className=" bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden  md:h-72 md:w-72  mb-10  md:mr-0">
          <Image src={deved} layout="fill" objectFit="cover" />
        </div>
      {/* <div className="relative w-60 h-60 md:w-72 md:h-72 mb-10 md:mb-20 md:mr-0 overflow-hidden">
      
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
          <path d="M1,100 Q100,300 400,100 L400,400 L0,400 Z" fill="#14B8A6" />
          </svg>

         
          <Image
            src={deved}
            fill
            style={{ objectFit: 'cover' }}
            alt="Profile"
            className="relative z-10"
          />
        </div> */}
    </div>
  )
}

export default Profile