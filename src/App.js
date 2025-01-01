// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import About from './components/About';
import Chatbot from './components/chatbot';
import Slogan from './components/slogan';
import WhoWeAre from './components/whoweare';
import Services from './components/services';
import SoftwareCompanyPage from './components/software/softwarepage1';
import ProfilePage from './components/profile';
import ContactForm from './components/contact';
import Getstarted from './components/signup/getstarted';
import Mainhome from './components/software/mainhome';
import Courses from './components/courses/coursepage';
import './App.css'; // Import your CSS file

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <>
                                    <div className="section1"><Hero /></div>
                                    <div className="section"><WhoWeAre /></div>
                                    <div className="section"><Features /></div>
                                    <div className="section"><Slogan /></div>
                                </>
                            } 
                        />
                        <Route path="/About" element={<div className=''><About /></div>} />
                        <Route path="/services" element={<div className='section1'><Services /></div>} />
                        <Route path="/softwarepage1" element={<div className='section1'><SoftwareCompanyPage /></div>} />
                        <Route path="/mainhome" element={<Mainhome />} /> 
                        
                        <Route path="/coursepage" element={<Courses />} />

                        <Route path="/contact" element={<ContactForm />} />
                        <Route path="/getstarted" element={<Getstarted />} />
                        <Route path="/Chatbot" element={<Chatbot />} />
                        {/* <Route path="/profile" element={<ProfilePage />} /> */}

                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
