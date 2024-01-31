import React from "react";
import './About.css';
import Navbar from "../components/Navbar";
//import about from "../assets/images/about.png";
import pic1 from"./pic1.jpeg"

function About()
{
    return(
        <div className="about">
        
        <br></br>
        <h1>About</h1>
        <p>Welcome to the Student Support Portal, your dedicated platform for academic success and holistic student well-being.</p>
        <div className="aboutcon">
        {/* <img src={pic1} style={{maxWidth:"15.8cm",marginTop:"1.2cm",maxHeight:"15cm"}}/> */}
        <div className="aboutcontainer">
        <h2>Our Mission</h2>
        <p>At the Student Support Portal, we are committed to empowering students on their academic journey. Our mission is to provide comprehensive resources, foster a supportive community, and promote holistic development.</p>
        
        <h2>What We Offer</h2>
        <p>Our portal offers a range of services, including:</p>
        <ul>
        <li><strong>Academic Resources:</strong> Access study materials, online courses, and tools to enhance your learning experience.</li>
        <li><strong>Wellness Hub:</strong> Prioritize your mental health with resources on stress management, mindfulness, and counseling services.</li>
        <li><strong>Career Development:</strong> Plan your future with career guidance, job listings, and resources for professional development.</li>
        <li><strong>Student Community:</strong> Connect with peers, explore clubs, and stay updated on campus events and activities.</li>
        </ul>
        
        <h2>Our Team</h2>
        <p>We have a dedicated team of professionals, including educators, counselors, and career advisors, committed to providing the support and resources you need to thrive during your academic journey.</p>
        </div>
        
        </div>
        <img src={pic1} style={{maxWidth:"21.5cm",marginTop:"1.2cm"}}/>
        </div>
    );
}
export default About;