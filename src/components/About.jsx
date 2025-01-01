import React, { useEffect } from 'react';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${entry.target.dataset.delay}s`;
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe team members
    document.querySelectorAll('.team-member').forEach((member, index) => {
      member.dataset.delay = index * 0.2;
      member.style.animationPlayState = 'paused';
      observer.observe(member);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Mariraja",
      role: "Founder & CTO",
      description: "Mariraja is the visionary behind InnovateHub, leading the team with passion and innovation. With extensive experience in technology and entrepreneurship, he is committed to building a thriving startup ecosystem.",
      image: "/path/to/mariraja-image.jpg",
      linkedin: "https://linkedin.com/in/mariraja",
      github: "https://github.com/mariraja",
      email: "mariraja@example.com",
      instagram: "https://instagram.com/mariraja"
    },
    {
      name: "Sekar Kumaran",
      role: "Co-Founder & Lead Developer",
      description: "Sekar is the technical mastermind at InnovateHub, driving our development efforts and ensuring top-notch software solutions. His expertise in coding and problem-solving is pivotal to our success.",
      image: "/path/to/sekar-image.jpg",
      linkedin: "https://linkedin.com/in/sekar",
      github: "https://github.com/sekar",
      email: "sekar@example.com",
      instagram: "https://instagram.com/sekar"
    },
    {
      name: "Dakshineswar.M",
      role: "CTO & Co-Founder",
      description: "Dakshin brings a wealth of experience in technology and strategy. As CTO, he focuses on advancing our tech capabilities and fostering innovation to drive our mission forward.",
      image: "/path/to/dakshineswar-image.jpg",
      linkedin: "https://linkedin.com/in/dakshineswar",
      github: "https://github.com/dakshineswar",
      email: "dakshineswar@example.com",
      instagram: "https://instagram.com/dakshineswar"
    }
  ];

  return (
    <div className='bodya'>
      <section id="mission">
        <div className="mission-container">
          <div className="mission-logo">
            <img src="images/logo.png" alt="InnovateHub Logo" />
          </div>
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              InnovateHub is committed to nurturing a dynamic and innovative startup ecosystem. Our mission is to empower individuals and organizations through comprehensive guidance, state-of-the-art software development, and the creation of supportive communities. We inspire entrepreneurs, educators, and students to pursue their aspirations and drive positive change. By providing tailored solutions and fostering collaboration, we aim to equip our clients with the tools and knowledge necessary to thrive in the evolving business landscape.
            </p>
          </div>
        </div>
      </section>

      <section id="team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img 
                src={member.image} 
                alt={member.name}
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${member.name}&size=180&background=random`;
                }}
              />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="description">{member.description}</p>
              <div className="social-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={`mailto:${member.email}`}>
                  <i className="fas fa-envelope"></i>
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;