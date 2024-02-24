import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact"
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Portfolio from "./components/portfolio/Portfolio";
const App = () =>{
    return(
        <>
            <Header/>
            <Navbar/>
            <About/>
            <Projects/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
        
    )
}

export default App