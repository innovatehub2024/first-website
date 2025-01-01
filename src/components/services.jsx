import React from 'react';
import './services.css';

const servicesData = [
    {
        title: "Workshops",
        description: "Interactive workshops to develop practical skills and gain hands-on experience.",
        icon: "🛠️", // You can replace this with an icon or image
        link: "#", // Replace with the actual link
    },
    {
        title: "Courses",
        description: "Comprehensive courses designed to help you master new technologies and methodologies.",
        icon: "📚",
        link: "/coursepage", // Replace with the actual link
    },
    {
        title: "Software Development",
        description: "Custom software development solutions tailored to meet your business needs.",
        icon: "💻",
        link: "/softwarepage1", // Replace with the actual link
    },
    {
        title: "Community",
        description: "Join our vibrant community and collaborate with like-minded innovators.",
        icon: "🤝",
        link: "/chatbot", // Replace with the actual link
    },
];

const Services = () => {
    return (
        <div className='scontainer'>
        <section className="services-section">
            <h1 className="services-title">Our Services</h1>
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h2 className="service-title">
                            <a href={service.link} className="service-link">
                                {service.title}
                            </a>
                        </h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
        </div>
    );
};

export default Services;
