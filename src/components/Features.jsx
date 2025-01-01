import React from 'react';
import Slider from 'react-slick';
import './Features.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Features = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        }
      }
    ]
  };

  return (
    <section id="features" className="features-section">
      <div className="white-shape"></div>
      <h2 className="features-title">Why Choose Us?</h2>
      <div className="features-wrapper">
        <Slider {...settings}>
          <div className="feature-card">
            <h3>Cutting-Edge Technology</h3>
            <p className='fpara'>We leverage the latest technology to build scalable, secure solutions that meet your unique needs.</p>
          </div>
          <div className="feature-card">
            <h3>Expert Team</h3>
            <p className='fpara'>Our team consists of seasoned professionals, bringing years of experience in development, cloud computing, and AI.</p>
          </div>
          <div className="feature-card">
            <h3>Custom Solutions</h3>
            <p className='fpara'>We offer custom-built solutions tailored specifically to your business's goals and market requirements.</p>
          </div>
          <div className="feature-card">
            <h3>Data Security</h3>
            <p className='fpara'>Your data is our priority. We follow strict security protocols and ensure the protection of all sensitive information.</p>
          </div>
          <div className="feature-card">
            <h3>Innovation-Driven</h3>
            <p className='fpara'>We continuously innovate by staying on top of emerging technologies, providing you with cutting-edge solutions.</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Features;
