import React, { useState } from 'react'
import reactIco from '../assets/logo/react.png'
import Image from 'next/image'
import developerImg from '../assets/imgs/developer.png'
import { tabList } from '@/data/data';

function Skill() {

  const [page, setPage] = useState(0)

  return (
      <section className="py-10 px-6 animate-slideDown  ">
            <div className="flex w-full justify-center ">
              <h2 className="text-2xl font-bold text-white mb-6 ">Skills</h2>
            </div>
            <div className=' md:flex md:justify-between' >
              <div className='w-full md:w-auto flex justify-center'>
                <Image src={developerImg} width={300}/>
              </div>
              <div className='mt-3'>
                <div className="flex w-full justify-center ">
                  <div className="flex w-full justify-center gap-5 ">
                    {
                      tabList.map((el, index)=> ( 
                      <h3 className={`text-md font-semibold text-white mb-6 cursor-pointer ${ page == index ? ' border-b-white border-b-2' : ''}`}
                      onClick={()=> setPage(index)}
                     >
                      {el}
                    </h3>))
                    }
                  </div>
                </div>
                <div className="text-orange-400 text-sm mt-3 ">
                {
                  page == 0 && 
                      <div className="ml-2 flex flex-col justify-center gap-2 animate-slideDown  ">
                        <div>HTML5, CSS3, Tailwind CSS</div>
                        <div className=''> 
                          JavaScript (ES6+)
                        </div>
                        <div className='flex items-center'>
                            React JS
                        </div>
                        
                        <div>Redux, Recoil</div>
                        <div>Responsive Design</div>
                        <div>SEO Best Practices</div>
                        <div>Socket Io</div>
                      </div>
                }
                {
                  page ==  1 && 
                      <div className="ml-2 flex flex-col justify-center gap-2 animate-slideDown -m-4  ">
                        <div>Node JS, Express JS, RESTful APIs, MVC Design Pattern </div>
                        <div>Mongo DB ( NOSQL ) </div>
                        <div>Google BigQuery ( SQL )</div> 
                        <div>Firebase ( Realtime Database, FCM, Storage )</div>   
                         <div>Redis ( Caching ) </div>
                        <div>Socket.Io</div>
                        <div>Graph QL </div>
                        <div>Third Party API Integration </div>
                        <div>SSR with PUG Template </div>
                      </div>
                }
                {
                  page === 2 && 
                      <div className="ml-2 flex flex-col justify-center gap-2 animate-slideDown  ">
                        <div>React Native CLI</div>
                        <div>React Native Expo</div>
                        <div>Redux, Recoil</div>
                        <div>FCM Integeration (Firebase Cloud Messaging)</div>
                      </div>
                }

                {
                  page === 3 && 
                     <div className="ml-2 flex flex-col justify-center gap-2 animate-slideDown  ">
                        <div>Google Cloud Platform (GCP)</div>
                        <div>Cloud Run</div>
                        <div>Cloud Scheduler</div>
                        <div>Cloud Build & Triggers</div>
                        <div>CI/CD Pipelines</div>
                        <div>Serverless Deployment</div>
                      </div>
                    // <ul className="list-disc list-inside ml-2 animate-slideDown">
                    //   <li>Google Cloud Platform (GCP)</li>
                    //   <li>Cloud Run</li>
                    //   <li>Cloud Scheduler</li>
                    //   <li>Cloud Build & Triggers</li>
                    //   <li>CI/CD Pipelines</li>
                    //   <li>Serverless Deployment</li>
                    // </ul>
                }
              </div> 
            </div>
          </div>   
      </section>
  )
}

export default Skill