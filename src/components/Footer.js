import React from 'react'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
function Footer({
    homeRef, skillRef, projectRef, scrollToRef
}) {
  return (
    <div className='text-white bg-teal-600 h-[200px] px-20 flex justify-between items-start py-5 '
    >
     <div>
        <div className='mb-2 text-lg'>
            Thet Htet Soe
        </div>
        <div className='text-sm text-yellow-100 '>
            Web Developer
        </div>
     </div>
     <div className=' select-none'>
        <div className='mb-3 text-lg'>
            Quick Link
        </div>
        <div className='text-yellow-100 text-sm flex flex-col justify-start gap-2'>
            <div onClick={()=> scrollToRef(homeRef)} className='cursor-pointer ' >
                Home
            </div>
            <div onClick={()=> scrollToRef(projectRef)}  className='cursor-pointer ' >
                Projects
            </div>
            <div onClick={()=> scrollToRef(skillRef)}  className='cursor-pointer ' >
                Skills
            </div>
        </div>
     </div>
    <div className="md:text-3xl  flex justify-center gap-3">
        <AiFillFacebook />
        <AiFillLinkedin />
    </div>


    </div>
  )
}

export default Footer