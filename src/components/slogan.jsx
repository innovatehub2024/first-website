import React from 'react';
import { useInView } from 'react-intersection-observer';
import './slogan.css';

function Slogan() {
  // Intersection Observer for circles and details
  const { ref: circleRef, inView: circleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className='page '>
     
      <div className="bodys">
      <div className="white-shape"></div>
      
        <div className="containers">
         
          <div className="circle-wrapper">

            <div
              className={`circles think ${circleInView ? 'animate' : ''}`}
              ref={circleRef}
            >
              <p>Inspire</p>
            </div>
            <div
              className={`details think-details ${circleInView ? 'animate' : ''}`}
            >
              <p className='para'>Foster creativity to drive breakthrough ideas. Inspire your team to challenge the status quo and explore new possibilities.</p>
            </div>
          </div>
          <div className="circle-wrapper">
            <div
              className={`circles optimise ${circleInView ? 'animate' : ''}`}
            >
              <p>Innovate</p>
            </div>
            <div
              className={`details optimise-details ${circleInView ? 'animate' : ''}`}
            >
              <p className='para'>Leverage cutting-edge technology to craft innovative solutions. Continuously evolve your products and processes to stay ahead in the tech .</p>
            </div>
          </div>
          <div className="circle-wrapper">
            <div
              className={`circles grow ${circleInView ? 'animate' : ''}`}
            >
              <p>Grow</p>
            </div>
            <div
              className={`details grow-details ${circleInView ? 'animate' : ''}`}
            >
              <p className='para growpara'>Scale your business by building a strong, agile team. Cultivate a data-driven mindset to fuel sustainable growth and long-term success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slogan;
