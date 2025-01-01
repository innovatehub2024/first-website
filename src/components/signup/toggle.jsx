import React from 'react';

function Toggle({ toggleContainer, isActive }) {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome User!</h1>
          <p>If you already have an account</p>
          <button className="hidden" id="login" onClick={toggleContainer}>
            Sign-in
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello, User!</h1>
          <p>If you don't have an account</p>
          <button className="hidden" id="register" onClick={toggleContainer}>
            Sign-up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toggle;