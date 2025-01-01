import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faMailchimp,
  faLinkedinIn,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  return (
    <div className="body">
      <div className="ccontainer">
        <span className="big-circle"></span>
        <img src="shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              We’re here to help! If you have any questions, concerns, or feedback, feel free to reach out to us.
              Our team is dedicated to providing prompt and effective assistance. We value your input and look
              forward to connecting with you.
            </p>
            <div className="info">
              <div className="information">
                <img src="email.png" className="icon" alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <img src="phone.png" className="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" required />
                <label htmlFor="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" required />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" required />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" required></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>

      <footer className="cfooter">
        <div className="social-icons">
          <a href="https://www.instagram.com/theinnovatehub.in/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/@InnovateHub_official" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="mailto:theinnovatehub@gmail.com">
            <FontAwesomeIcon icon={faMailchimp} />
          </a>
          <a href="https://whatsapp.com/channel/0029VajRfTG72WU4kysBgy34" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;
