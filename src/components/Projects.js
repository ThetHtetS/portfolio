import React from 'react'

function Projects({projectRef}) {

    const projects = [
    { 
      type: "Company Project",
      title: "Exchange Rate And Multi-Service App ",
      description: "Realtime Exchange Rate, CV generator AI-Powered Auto-Generation and much more..",
      features: [
        "Realtime Exchange Rate with admin management panel and User Mobile App",
        "An admin dashboard that displays exchange rate data for multiple currencies, including: Last 7 days of historical exchange rates, Weekly highest and lowest rates for each currency",
        "Support Multiple Agents with specific currency permission",
        "CV Generator with Multiple Templates in Four Language , and AI-Powered Auto-Generation",
        "Admin can upload blog posts"
      ],
      role: "Full-Stack Developer",
      contributions: [
        "Designed and implemented RESTful APIs using Express.js",
        "Integrated MongoDB for dynamic data filtering and reporting",
        "Integrated Google Gemini API to enable advanced AI-powered features such as text generation and content suggestions",
        "Built responsive front-end using React",
        "Developed a React Native mobile experience with seamless API integration for cross-platform access",
        "Implemented secure image upload functionality using Firebase Storage, allowing users to upload, store, and retrieve images efficiently with real-time updates and URL access."
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "Express","Mongo Db", "React Native CLI", "JWT Auth", "Firebase"],
      color: "#0066FF",
    },
    {
      title: "Real-Time Chat App with Video Calling",
      description: "A full-featured messaging application that supports real-time text chat and video calls between users",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    }
  ]
  return (
    <div className=" pb-6 animate-slideDown bg-gray-800  px-2 md:px-20 lg:px-40"    ref={projectRef}>
       <div className='w-full flex justify-center text-white font-bold py-6' >
          Featured Projects
       </div>
       <div className='flex justify-start items-start gap-6' >
          {
            projects.map(proj => (
               <div className='w-[33%] rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-700' > 
                  <img src={proj.image}/>
                  <div className='p-6'>
                    <h3 className="text-md font-semibold mb-2 text-gray-800 dark:text-white">
                      {proj.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {proj.description}
                    </p>
                  </div>
               </div>
            ))
          }
       </div>
    </div>
  )
}

export default Projects