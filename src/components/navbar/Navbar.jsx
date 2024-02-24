import React, { useState, useEffect } from 'react'
import './navbar.css'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosGitBranch } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
// import { IoMdSettings } from "react-icons/io";
import { GiSkills } from "react-icons/gi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'project', 'portfolio', 'contact'];
    const scrollHeight = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const breakpoints = sections.map((section, i) => windowHeight * (i + 1));

    for (let i = 0; i < breakpoints.length; i++) {
      if (scrollHeight < breakpoints[i]) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href='#' onClick={() => handleClick('home')} className={activeSection === 'home' ? 'active' : ''}><IoHomeOutline /></a>
      <a href='#about' onClick={() => handleClick('about')} className={activeSection === 'about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#project' onClick={() => handleClick('project')} className={activeSection === 'project' ? 'active' : ''}><GiSkills /></a>
      <a href='#portfolio' onClick={() => handleClick('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}><IoIosGitBranch /></a>
      <a href='#contact' onClick={() => handleClick('contact')} className={activeSection === 'contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Navbar