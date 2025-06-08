"use client"
import Image from "next/image";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useRef, useState } from "react";
import deved from "./../../public/dev-ed-wave.png";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Skill from "@/components/Skill";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const skillRef = useRef(null)
  console.log(darkMode);
   const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className= { darkMode ? "dark" : "bg-slate-100"}>
      <Head>
        <title>Thet Htet Soe</title>
        <meta name="description" content="THS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="   dark:bg-gray-900">
         <div className=" px-2 md:px-10 md:px-20 lg:px-40 ">
          <section className="min-h-screen" id="profile " ref={homeRef} >       
            <Header 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              scrollToRef={scrollToRef} 
              projectRef={projectRef}
              homeRef={homeRef}
              skillRef={skillRef}
            />
            <Profile />
          </section>
         </div>
          <Projects projectRef={projectRef} />
         <div className=" px-2 md:px-10 md:px-20 lg:px-40 pb-12  " ref={skillRef}>
           <Skill />
         </div> 
       
        <Footer 
        scrollToRef={scrollToRef}
        homeRef={homeRef}
        skillRef={skillRef}
        projectRef={projectRef}
        />
      </main>
      
    </div>
  );
}
