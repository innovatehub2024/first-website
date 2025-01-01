import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './message';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [otp, setOTP] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const startResendTimer = () => {
    setIsResendDisabled(true);
    setResendTimer(30);
    
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const validateForm = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setMessage("Password must be at least 8 characters long and contain both letters and numbers.");
      setShowModal(true);
      return false;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      setShowModal(true);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage("Please enter a valid email address.");
      setShowModal(true);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      setShowModal(true);
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Registration successful! Please check your email for OTP verification code.');
        setShowModal(true);
        setShowOTPForm(true);
        startResendTimer();
      } else {
        if (data.error === 'email_exists') {
          setMessage('This email is already registered.');
        } else if (data.error === 'mobile_exists') {
          setMessage('This mobile number is already registered.');
        } else {
          setMessage(data.message || 'Registration failed. Please try again.');
        }
        setShowModal(true);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setShowModal(true);
    }
  };

  const handleOTPVerification = async (e) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      setMessage('Please enter a valid 6-digit OTP.');
      setShowModal(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          otp: otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Email verified successfully! Redirecting to login...');
        setShowModal(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        setMessage(data.message || 'Invalid OTP. Please try again.');
        setShowModal(true);
      }
    } catch (error) {
      setMessage('An error occurred during verification. Please try again.');
      setShowModal(true);
    }
  };

  const handleResendOTP = async () => {
    if (isResendDisabled) return;

    try {
      const response = await fetch('http://localhost:3000/api/auth/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('New OTP has been sent to your email.');
      } else {
        setMessage(data.message || 'Failed to resend OTP. Please try again.');
      }
      setShowModal(true);
      startResendTimer();
    } catch (error) {
      setMessage('Failed to resend OTP. Please try again.');
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="sign-up">
      {!showOTPForm ? (
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-icon">
            <a href="#"><i className="fa-solid fa-envelope"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-google"></i></a>
          </div>
          <span><h3>or use your email for registration</h3></span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            required
            value={formData.mobile}
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <button type="submit">Sign-up</button>
        </form>
      ) : (
        <form onSubmit={handleOTPVerification} className="otp-form">
          <h2>Verify Your Email</h2>
          <p>Please enter the verification code sent to:<br/><strong>{formData.email}</strong></p>
          <input
            type="text"
            placeholder="Enter OTP"
            required
            value={otp}
            onChange={(e) => setOTP(e.target.value.replace(/\D/g, '').slice(0, 6))}
            maxLength="6"
          />
          <button type="submit">Verify Email</button>
          <button 
            type="button" 
            onClick={handleResendOTP} 
            className={`resend-btn ${isResendDisabled ? 'disabled' : ''}`}
            disabled={isResendDisabled}
          >
            {isResendDisabled 
              ? `Resend OTP in ${resendTimer}s` 
              : 'Resend OTP'}
          </button>
        </form>
      )}
      {showModal && <Modal message={message} onClose={handleCloseModal} />}
    </div>
  );
}

export default SignUp;
