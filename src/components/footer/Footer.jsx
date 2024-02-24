import React from 'react'
import './footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const Footer = () => {
  
  return (
    <footer>
      <a href='#' className='footer__logo'>BHUSHAN</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

        <div className="footer__socials">
          <a href='https://www.instagram.com/atolebhushan29/?hl=en' target='_blank'><FaInstagram/></a>
          <a href='https://x.com/absolutelycod?t=iNHdkgIEIPHN40ZUYDh9-Q&s=09' target='_blank'><FaXTwitter/></a>
          <a href='https://www.linkedin.com/in/bhushan-atole-1990641b8/' target='_blank'><FaLinkedinIn/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; designed and developed by Bhushan Atole</small>
        </div>

    </footer>
  )
}

export default Footer