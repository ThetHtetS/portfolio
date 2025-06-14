import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header({ darkMode , setDarkMode, scrollToRef, projectRef, skillRef, homeRef }) {
  const navItems = [{
    labels: "Home",
    to: homeRef
  },
  {
    labels: "Projects",
    to: projectRef
  },
  {
    labels: "Skills",
    to: skillRef
  },
]
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-buttons text-xl">Developer</h1>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill
                  onClick={() => {setDarkMode(!darkMode)
                  console.log("click");}}
                  className=" cursor-pointer text-2xl"
                />
              </li> */}
              {
                navItems.map (el => (
              <li onClick={()=> scrollToRef(el.to)}>
                <button 
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                 { el.labels}
                </button>
              </li>
                ))
              }
              
            </ul>
          </nav>
  )
}

export default Header