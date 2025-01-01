import React, { useState } from 'react';
import './signup.css';
import Toggle from './toggle';
import SignIn from './signin';
import SignUp from './signup';

function Getstarted() {
  const [isActive, setIsActive] = useState(false);

  const toggleContainer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bodysign">
    <div className={`getcontainer ${isActive ? 'active' : ''}`} id="getcontainer">
      <SignUp />
      <SignIn />
      <Toggle toggleContainer={toggleContainer} isActive={isActive} />
      
    </div>
    </div>
  );
}

export default Getstarted;
