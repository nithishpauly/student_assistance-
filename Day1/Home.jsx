import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo11 from './photo11.jpg';
import phtoo1 from './phtoo1.jpeg';
import './Home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 756,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1756,
    centerMode: true,
    centerPadding: '1',
  };

  return (
    <div className='page-container'>
      <div className='slide-container'>

      <Slider {...settings}>
        {/* Add your sliding photos here */}
        <div>
          <img src={photo11} alt="Slide 1" />
        </div>
        <div>
          <img src={phtoo1} alt="Slide 2" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      
      {/* Dark-themed impressive footer with address, email, phone, and social media icons */}
      <footer style={footerStyle}>
        <div className="footer-content">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>123 Main Street, Cityville, State, 12345</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="social-icons">
            {/* Add your social media icons here */}
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="legal-info">
            <h2>Legal Information</h2>
            <ul>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Disclaimer</a></li>
              {/* Add more legal links as needed */}
            </ul>
          </div>
          <div className="footer-links">
            <h2>Follow us!</h2>
            <ul>
              <li><a href="#">Refer and Earn</a></li>
            </ul>
          </div>
          <div className="company-info">
            <h2>Company</h2>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Alumni speak</a></li>
              <li><a href="#">Grievance redressal</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Our Locations</a></li>
            </ul>
          </div>
          <div className="work-with-us">
            <h2>Work with us</h2>
            <ul>
              <li><a href="#">Become an instructor</a></li>
              <li><a href="#">Blog as guest</a></li>
            </ul>
          </div>
          <div className="discover-info">
            <h2>Discover</h2>
            <ul>
              <li><a href="#">Skillup</a></li>
              <li><a href="#">Skillup Sitemap</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">RSS feed</a></li>
              <li><a href="#">City Sitemap</a></li>
            </ul>
          </div>
          <div className="business-info">
            <h2>For Businesses</h2>
            <ul>
              <li><a href="#">Corporate training</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Digital Transformation</a></li>
            </ul>
          </div>
          <div className="mobile-apps">
            <h2>Learn On the Go!</h2>
            <ul>
              <li><a href="#">Get the Android App</a></li>
              <li><a href="#">Get the iOS App</a></li>
            </ul>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};
const footerStyle = {
  background: '#333',
  color: '#fff',
  padding: '2rem',
  textAlign: 'center',
};



export default Home;
