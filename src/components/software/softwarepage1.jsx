import React, { useEffect, useRef } from 'react';
import './shome.css';

const SoftwareCompanyPage = () => {
    const timelineItems = [
        { number: '01', title: 'Main Home', image: 'images/bg.jpeg',link:'/mainhome' },
        { number: '02', title: 'App Presentation', image: '/api/placeholder/1200/800',link:'/mainhome' },
        { number: '03', title: 'Digital Services', image: '/api/placeholder/1200/800',link:'/mainhome' },
        { number: '04', title: 'IT Business', image: '/api/placeholder/1200/800',link:'/mainhome' },
        { number: '05', title: 'App Showcase', image: '/api/placeholder/1200/800',link:'/mainhome' },
        { number: '06', title: 'StartApp Home', image: '/api/placeholder/1200/800',link:'/mainhome' },
        { number: '07', title: 'Company Home', image: '/api/placeholder/1200/800' ,link:'/mainhome'},
        { number: '08', title: 'App Landing', image: '/api/placeholder/1200/800' ,link:'/mainhome'},
        { number: '09', title: 'Software Support', image: '/api/placeholder/1200/800',link:'/mainhome' },
        { number: '10', title: 'Tech Company', image: '/api/placeholder/1200/800',link:'/mainhome' },
        { number: '11', title: 'Product Showcase', image: '/api/placeholder/1200/800',link:'/mainhome' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.3 }
        );

        document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    const extraFeatures = [
        { title: 'Agile Development', text: 'Streamlined processes for faster delivery.' },
        { title: 'AI-Powered Solutions', text: 'Harnessing AI for smarter applications.' },
        { title: 'Cloud Integration', text: 'Seamless deployment in cloud environments.' },
    ];

    return (
        <main className="page-container">
            <header className="header">
                <h1 className="company-title">TechVision Solutions</h1>
                <h3 className="company-subtitle">The Digital World in Your Hands</h3>
            </header>

            <section className="timeline-section">
                <div className="timeline-container">
                    <div className="timeline-line" />
                    {timelineItems.map((item) => (
                        <div key={item.number} className="timeline-item">
                            <div className="timeline-number">{item.number}</div>
                            <div className="timeline-content">
                                <a href={item.link}><img src={item.image} alt={item.title} className="timeline-image" /></a>
                                <h4 className="timeline-title">{item.title}</h4>
                            </div>
                            <div className="timeline-dot" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="software-features-section ">
                <div className="features-container">
                    <h2>Our Expertise</h2>
                    <div className="features-grid">
                        {extraFeatures.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-text">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SoftwareCompanyPage;
