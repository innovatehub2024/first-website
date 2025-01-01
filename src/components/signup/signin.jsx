import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './message';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setMessage('Login successful! Redirecting...');
        setShowModal(true);
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setMessage(data.message || 'Login failed. Please check your credentials.');
        setShowModal(true);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit}>
        <h1>Sign-in</h1>
        <div className="social-icon">
          <a href="#"><i className="fa-solid fa-envelope"></i></a>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-google"></i></a>
        </div>
        <span><h3>or use your email account</h3></span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
        <a href="/forgot-password">Forgot Password?</a>
        <button type="submit">Sign-in</button>
      </form>
      {showModal && <Modal message={message} onClose={handleCloseModal} />}
    </div>
  );
}

export default SignIn;