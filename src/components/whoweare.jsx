import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './whoweare.css';

const WhoWeAre = () => {
  // Intersection Observer for fade-in animation
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.1, // 10% of the element must be in view
  });

  // Intersection Observer for slide-in animation
  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Spring animation for the introduction section
  const fadeIn = useSpring({
    opacity: introInView ? 1 : 0,
    transform: introInView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  // Spring animation for the values section
  const slideIn = useSpring({
    transform: valuesInView ? 'translateX(0)' : 'translateX(-100%)',
    opacity: valuesInView ? 1 : 0,
    config: { duration: 900 },
  });

  return (
    <>
    <div className="who-we-are">
    <div className="white-shape"></div>
      
      {/* Animated div with fade-in effect */}
      <animated.div style={fadeIn} ref={introRef} className="intro-section">
        <h1>Who We Are</h1>
        <p className='head'>Welcome to InnovateHub, your go-to place for software development, programming tutorials, and hands-on projects for students. We are passionate about turning ideas into functional and impactful digital solutions.</p>
      </animated.div>

      {/* Animated div with slide-in effect */}
      <animated.div style={slideIn} ref={valuesRef} className="values-section">
        <h2>Our Mission</h2>
        <p>To inspire and educate through coding tutorials and simplify the process of learning and building software projects.</p>
        
        <h2>What We Do</h2>
        <p>At InnovateHub, we provide custom software development services, insightful tutorials, and simple, practical projects that cater to students and learners of all levels.</p>
      </animated.div>
    
    </div>
    </>
  );
};

export default WhoWeAre;
