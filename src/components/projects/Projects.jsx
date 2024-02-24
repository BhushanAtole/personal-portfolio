import React from 'react'
import './project.css'
import { BsPatchCheckFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { BiSolidFileCss } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiVisualstudiocode } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";
// import Portfolio from './Portfolio';

function Projects() {
  return (
    <section id='project'>
      
        <h5>What Skills I Have</h5>
        <h2>Skillset I Work With</h2>
    

      <div className="container  experience__container">
        <div className="experience__frontend">
          {/* <h3>Frontend Development</h3> */}
          <div className="experience__content">

            <article className='experience__details'>
              <IoLogoHtml5 className='experience__details-icon'/>
               <div>
                <h4>HTML</h4>
                {/* <small className='text-light'>Experienced</small> */}
             </div>
            </article>

            <article className='experience__details'>
              <BiSolidFileCss className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>


            <article className='experience__details'>
                <FaJava className='experience__details-icon'/>
                <div>
                  <h4>JAVA</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>

              <article className='experience__details'>
                <GrMysql className='experience__details-icon'/>
                <div>
                  <h4>MYSQL</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>


          </div>
        </div>
        {/* Backend */}
        <h2>Tools I use</h2>
        <div className="experience__backend">

          {/* <h3>Backend Development</h3> */}
            <div className="experience__content">

              <article className='experience__details'>
                <SiVisualstudiocode className='experience__details-icon'/>
                <div>
                  <h4>VS Code</h4>
                </div>
              </article>

              <article className='experience__details'>
                <SiIntellijidea className='experience__details-icon'/>
                <div>
                  <h4>IntelliJ IDEA </h4>
                </div>
              </article>

              <article className='experience__details'>
              <SiGithub className='experience__details-icon'/>
              <div>
              <h4>GitHub</h4>
              </div>
            </article>

              <article className='experience__details'>
                <SiEclipseide className='experience__details-icon'/>
                <div>
                  <h4>Eclipse</h4>
                </div>
              </article>
          </div>

        </div>

      </div>

      {/* <Portfolio/> */}
    </section>
  )
}

export default Projects