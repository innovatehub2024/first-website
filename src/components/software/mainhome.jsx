import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Smartphone, Database, Zap, Layout, Clock, Lock, Palette, Check ,Server} from 'lucide-react';
import './mainhome.css';

const Mainhome = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    websiteType: '',
    businessType: '',
    businessName: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay" />
        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10}px`,
                height: `${Math.random() * 10}px`,
                animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Secure Your Digital Future</h1>
          <p className="hero-description">
            Protecting your network infrastructure with cutting-edge security solutions
          </p>
          <button className="hero-button">
            Get Started <ChevronRight className="hero-button-icon" />
          </button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <div className="section-container">
          <h2 className="section-title">Network Security Design</h2>
          <div className="who-we-are-grid">
            <div className="who-we-are-text">
              <p>We are industry leaders in network security, providing comprehensive solutions
                that protect your valuable data and infrastructure from modern threats.</p>
              <p>Our team of experts combines years of experience with cutting-edge technology
                to deliver unparalleled security services.</p>
            </div>
            <div className="shield-container">
              <div className="shield-background" />
              <Shield className="shield-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">Network Infrastructure Design</h2>
          <div className="features-grid">
            {[
              { icon: Clock, title: 'Fast and Easy', desc: 'Quick setup and intuitive interface for seamless integration' },
              { icon: Lock, title: 'Safe Online Service', desc: 'Enterprise-grade security protocols and data protection' },
              { icon: Palette, title: 'Modern Look', desc: 'Contemporary design with cutting-edge UI/UX principles' },
              { icon: Check, title: 'Reliable Usage', desc: '99.9% uptime guarantee with continuous monitoring' }
            ].map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">
                  <div className="feature-icon-background" />
                  <item.icon className="feature-icon" />
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="additional-features">
            <div className="feature-card">
              <Database className="feature-icon animate-pulse" />
              <h3 className="feature-title">Manage Your Data Efficiently</h3>
              <p className="feature-description">
                Streamline your data management with our advanced infrastructure solutions.
              </p>
            </div>
            <div className="feature-card">
              <Zap className="feature-icon animate-bounce" />
              <h3 className="feature-title">Built with Neat Utility Features</h3>
              <p className="feature-description">
                Access powerful tools designed to enhance your network performance.
              </p>
            </div>
            <div className="feature-card">
              <Layout className="feature-icon animate-spin-slow" />
              <h3 className="feature-title">Futuristic Interactive Designs</h3>
              <p className="feature-description">
                Experience next-generation interfaces that make security management intuitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Device Showcase */}
      <section className="device-showcase">
        <div className="section-container">
          <div className="devices-grid">
            {[
              { imgSrc: 'path/to/mobile-image.png', title: 'Mobile View' },
              { imgSrc: 'path/to/tablet-image.png', title: 'Tablet View' },
              { imgSrc: 'path/to/desktop-image.png', title: 'Desktop View' }
            ].map((item, index) => (
              <div key={index} className="device-card">
                <img src={item.imgSrc} alt={item.title} className="device-image" />
                <p className="device-title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="enquiry-section">
        <div className="form-container">
          <div className="form-card">
            <h2 className="form-title">Enquire Now</h2>
            <form onSubmit={handleSubmit} className="enquiry-form">
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'mobile', label: 'Mobile Number', type: 'tel' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'businessType', label: 'Business Type', type: 'text' },
                { name: 'businessName', label: 'Business Name', type: 'text' }
              ].map((field) => (
                <div key={field.name} className="form-field">
                  <label className="form-label">{field.label}</label>
                  <input
                    type={field.type}
                    className="form-input"
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    required
                  />
                </div>
              ))}
              <div className="form-field">
                <label className="form-label">Preferred Time to Call</label>
                <input
                  type="time"
                  className="form-input"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                />
              </div>
              <button type="submit" className="form-submit">Submit Enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainhome;