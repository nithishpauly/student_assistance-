import React from 'react';

import './Contact.css';
import photo1 from './photo1.jpg';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (  
    <div>
    
       <div className="sub-contai">
   <h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"14cm"}}>CONTACT US!!</h1>
   </div>

      <div className="contact-container">
        <h2 className="contact-header">Contact Us</h2>
        <p className="contact-text">
          We value your feedback and are here to assist you. Please feel free to reach out to us using the contact details below.
        </p>
        
        <div className="contact-details">
          <div className="contact-info">
            <h4>Email</h4>
            <p>simpleLearn@gmail.com</p>
          </div>
          <div className="contact-info">
            <h4>Phone</h4>
            <p>+91 845 857 8754</p>
          </div>
          <div className="contact-info">
            <h4>Address</h4>
            <p>
              12,Mainroad
              <br />
              Racecourse
              <br />
              coimbatore,Tamilnadu
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h4>Send us a Message</h4>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <img src={photo1} style={{maxWidth:"37.8cm",marginTop:"2cm",marginRight:"0.1cm",padding:"1cm"}} />
    </div>
  );
};

export default Contact;