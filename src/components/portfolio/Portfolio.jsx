import React from 'react'
import IMG2  from '../../assets/background-changer.gif'
import IMG3  from '../../assets/wheather.png'
import IMG4  from '../../assets/pass-gen.jpeg'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
            <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt=''></img>
            </div>
            <h3>Weather App</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com/BhushanAtole/wheather" className="btn" target='_blank' rel="noopener noreferrer">Github</a>
                <a href="https://bhushanatole.github.io/wheather/" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Demo</a>
            </div>
            </article>
       
            <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt=''/>
            </div>
            <h3>Background Changer</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com/BhushanAtole/BackgroundChanger" className="btn" target='_blank'>Github</a>
                <a href="https://background-changer-flax-beta.vercel.app/" className="btn btn-primary" target='_blank'>Demo</a>
            </div>    
            </article>
       
            <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt=''/>
            </div>
            <h3>PassWord Generator</h3>
            <div className="portfolio__item-cta">
                <a href="https://github.com/BhushanAtole/PasswordGenerator.git" className="btn" target='_blank'>Github</a>
                <a href="https://password-generator-ashy-omega.vercel.app/" className="btn btn-primary" target='_blank'>Demo</a>
            </div>
            </article>
     
    
        </div>


    </section>
  )
}

export default Portfolio