import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className="about__content">

          {/* <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiece</h5>
              <small>3+ Years Working</small>
            </article>
          
            <article className='about__card'>
              <TbUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
          
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Complete</small>
            </article>
         </div> */}

         <p>
         Hi Everyone, I am Bhushan Atole from Pune, Maharastra, India. I am a computer science Student Pursuing in final year of Engineering and a passionate programmer.
          <br />
          <br />
          In addition to coding, here are some other things I enjoy doing!
          <br/>
          <ul>
            <li className="about-activity">
              <FaArrowRight /> Developing Websites
            </li>
            <li className="about-activity">
              <FaArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <FaArrowRight /> Traveling
            </li>
          </ul>

         </p>

         

         <a href='#contact' className='btn btn-primary'>Lets Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About