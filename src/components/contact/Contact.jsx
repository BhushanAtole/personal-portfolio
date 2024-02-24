import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2jza5nj', 'template_chbl839', form.current, {
        publicKey: '3ERrEWm3Of67nSrRa',
      })
      // .then(
      //   () => {
      //     console.log('SUCCESS!');
      //   },
      //   (error) => {
      //     console.log('FAILED...', error.text);
      //   },
      // );
      e.target.reset()
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineMailOutline className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>atolebhushan2001@gmail.com</h5>
              <a href='mailto:atolebhushan2001@gmail.com'>Send a message</a>
            </article>
        </div>
        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact