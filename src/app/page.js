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
import { useState } from "react";
import deved from "./../../public/dev-ed-wave.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <div className={darkMode ? "dark" : "bg-slate-100"}>
      <Head>
        <title>Thet Htet Soe</title>
        <meta name="description" content="THS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className=" px-2 md:px-10 dark:bg-gray-900 md:px-20 lg:px-40 pb-52">
        
        <section className="min-h-screen" id="profile">
          
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-buttons text-xl">developedbyThet</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {setDarkMode(!darkMode)
                  console.log("click");}}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              {/* <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </nav>

          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-4xl md:text-5xl text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Thet Htet Soe
            </h2>
            <div className="text-md leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Javascript Based full-stack Developer
            </div>
            {/* <div className="text-3xl md:text-5xl flex justify-center gap-12 py-3 text-gray-600 dark:text-gray-400">
              <AiFillFacebook />
              <AiFillLinkedin />
            </div> */}
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden  md:h-96 md:w-96 mt-8 mb-10 md:mb-20">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
       
        <section id="projects" className="flex flex-col justify-center gap-12 ">
          <div className="bg-black text-white text-center py-4 ">   PROJECTS </div>
          
          <div id="project-1" className="round-lg p-5 shadow-lg md:px-24 pb-10 dark:text-white bg-white dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-3 cursor-pointer">
                  <a href="https://essence-explorer.info" target="_blank" >
                    Dynamic Blog App with Admin Dashboard hosted on AWS
                  </a>
                </h3>
                {/* <div className="mb-3">
                   
                </div> */}
            
              </div>
              <div id="body" className="pt-5">
                   <p>
                      &emsp;This project has been build using Node Js and MongoDb Atalas, server side 
                      rendering with Pug template, pure html, css, js, Automatic email sending using Nodemailer, 
                      images storage on AWS S3 bucket via programmatic access using aws-sdk, chart using chart Js
                      and fully function pagination system  <br/>
                      <br/> 
                    </p>
                    <p className="">
                    - As an essential part of every web application, real world Authentication and  Authorization system
                      was implemented using jwt and cookie. <br/><br/>
                    - Authentication featured includes user SignUp, Login, Logout, change password, forgot and reset password.
                      In this senerio, password reset link will be sent to user email.<br/><br/>
                    - Authorization has been implemented base on user role, such as normal user, editor, admin.
                      normal user can&apos;t access to admin Dashboard.<br></br><br/>
                    - User can upload profile picture, change user data incliding name, email, and password.<br/><br/>
                    - Also user can read, like, comment on blog post.<br/><br/>
                    -On admin side, CRUD operation of posts, category, manage users, check weekly views line chart,
                    and action log list <br/><br/>
                  </p>  
              </div>
              <div id="cart-footer">
                <div>
                  This project was hosted on Aws elastic BeanStalk using code Pipeline with the domain
                  name of &nbsp;
                  <a href="https://essence-explorer.info" className="underline font-bold">
                    essence-explorer.info
                  </a>
                </div>
                <div>
                  <a href="https://github.com/ThetHtetS/server-siderendering-blogapp.git" target="_blank"   className="underline font-bold">
                    https://github.com/ThetHtetS/server-siderendering-blogapp.git
                  </a>
                </div>

              </div>
          </div>


          <div id="project-2" className="round-lg p-5 md:px-24 pb-10 shadow-lg dark:text-white bg-white dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-3">
                      BOOKSTORE E-COMMERCE   
                </h3>
                <div className="mb-3">
                   (Tailwand + NextJs + Redux + Typescript + ExpressJs + MongoDb)
                </div>
               
              </div>
              <div id="body" className="pt-5">
                <p>
                  &nbsp;Bookstore App with client side rendering with Next Js and backend restful API using express and
                  MongoDb <br/>
                  App featured describe in readMe file on gitHub repo
                </p>
              </div>
              <div> 
              <div id="footer">
                  <a href="https://github.com/ThetHtetS/bookStore-Next-Js-" target="_blank" className="underline">
                    https://github.com/ThetHtetS/bookStore-Next-Js-
                  </a>
                </div>
                <div>
                  <a href="https://github.com/ThetHtetS/bookStore-ExpressJs-" target="_blank" className="underline">
                    https://github.com/ThetHtetS/bookStore-ExpressJs-
                  </a>
                </div>
              </div>
          </div>
          <div id="project-4" className="round-lg p-5 md:px-24 pb-10 shadow-lg dark:text-white bg-white dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-3">
                NodeFarm Mini App using pure Node Js. 
                </h3>
               
              </div>
              <div id="body" className="pt-5">
                <p>
                  &nbsp;NodeFarm Mini App using pure Node Js.
                  <br/>
                 
                </p>
              </div>
              <div> 
              <div id="footer">
                  <a href="https://github.com/ThetHtetS/node-farm.git" target="_blank" className="underline">
                     https://github.com/ThetHtetS/node-farm.git
                  </a>
                </div>
             
              </div>
          </div>

          <div id="project-4" className="round-lg p-5 md:px-24 pb-10 shadow-lg dark:text-white bg-white dark:bg-gray-900">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-3">
                      React laravel E-COMMERCE   
                </h3>
                <div className="mb-3">
                   (bootstrap + react + Laravel + MySql Database)
                </div>
               
              </div>
              <div id="body" className="pt-5">
                <p>
                  &nbsp;Ecommerce App with client side rendering with react and backend restful API with laravel and
                  Mysql Database <br/>
                 
                </p>
              </div>
              <div> 
              <div id="footer">
                  <a href="https://github.com/ThetHtetS/EcommerceUsingReactJs.git" target="_blank" className="underline">
                  EcommerceUsingReactJs.git
                  </a>
                </div>
                <div>
                  <a href="https://github.com/ThetHtetS/EcommerceApiUsingLaravel.git" target="_blank" className="underline">
                     EcommerceApiUsingLaravel.git
                  </a>
                </div>
              </div>
              {/* <div id="footer"> 
              <div>
                  <a href="https://github.com/ThetHtetS/EcommerceUsingReactJs.git" target="_blank" className="underline">
                    https://github.com/ThetHtetS/EcommerceUsingReactJs.git
                  </a>
                </div>
                <div>
                  <a href="https://github.com/ThetHtetS/EcommerceApiUsingLaravel.git" target="_blank" className="underline">
                    https://github.com/ThetHtetS/EcommerceApiUsingLaravel.git
                  </a>
                </div>
              </div> */}
          </div>
          <div className="bg-black text-white text-center py-4 "> SKILLS </div>

          <div id="project-4" className="round-lg p-5 md:px-24 flex flex-col gap-2 shadow-lg dark:text-white bg-white dark:bg-gray-900">
            <div>
                <h3 className="text-lg font-bold ">
                  UI/UX
                </h3>
                <p>
                  Html, Css, Tailwand css
                </p>
            </div> 
            <div>
                <h3 className="text-lg font-bold ">
                  Client side
                </h3>
                <p>
                  React (NextJs) and Typescript 
                </p>
            </div> 
            <div>
                <h3 className="text-lg font-bold ">
                  Javascript
                </h3>
            </div> 
            <div>
                <h3 className="text-lg font-bold ">
                  Restful API
                </h3>
                <p>
                  NodeJs, ExpressJs
                </p>
            </div> 
            <div>
                <h3 className="text-lg font-bold ">
                  Relational and Non-relational Database
                </h3>
                <p>
                  Mongo Db,
                  Mysql
                </p>
            </div> 
            <div>
                <h3 className="text-lg font-bold">
                  Version Control System
                </h3>
                <p>
                  able to use git & github
                </p>
            </div> 
            <div>
                <h3 className="text-lg font-bold ">
                  AWS cloud
                </h3>
                <p> 
                </p>
            </div> 
          </div>
          <div className="bg-black text-white text-center py-4 "> LEARNING JOURNEY </div>
          <div className=" round-lg p-5 md:px-24 flex flex-col gap-2 shadow-lg dark:text-white bg-white dark:bg-gray-900">
            <p>
              I am currently learning the following courses from udemy, <br>
              </br> 
              -Software Archiecture & Design of Modern Large Scale System <br></br>
              -Javasctipt Algorithms and Data Structures Masterclass and,<br/>
              -Socket io <br/>
              -Amazon Web services (AWS)
            </p>
          </div>
          
        </section>
    
      </main>
    </div>
  );
}
