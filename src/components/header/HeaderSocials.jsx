import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/bhushan-atole-1990641b8/' target="_blank"><FaLinkedin /></a>
        <a href='https://github.com/BhushanAtole' target="_blank"><FaGithub /></a>
        <a href='https://www.instagram.com/atolebhushan29/?hl=en' target="_blank"><FaInstagram /></a>
        <a href='https://x.com/absolutelycod?t=iNHdkgIEIPHN40ZUYDh9-Q&s=09' target="_blank"><FaSquareXTwitter /></a>

    </div>
  )
}

export default HeaderSocials