import React from 'react';
import './Services.css';
/* File name: Services.js
Student Name: Sadik Elahi
Student ID: 301303846
Date: 2024-09-28
*/


/* ===================== */
/* Section: Services Component */
/* ===================== */

const Services = () => {
    /* ===================== */
    /* Section: Service Data */
    /* ===================== */

    const services = [
        {
            title: 'Web Development',
            description: 'Creating responsive and user-friendly websites to enhance your online presence.',
        },
        {
            title: 'Mobile Development',
            description: 'Developing mobile applications that provide seamless experiences on both iOS and Android.',
        },
        {
            title: 'SEO Optimization',
            description: 'Improving website visibility and ranking on search engines to drive organic traffic.',
        },
        {
            title: 'UI/UX Design',
            description: 'Designing intuitive interfaces and experiences that engage users and promote usability.',
        },
        {
            title: 'Cloud Solutions',
            description: 'Implementing scalable cloud infrastructure to enhance application performance and reliability.',
        },
        {
            title: 'E-Commerce Development',
            description: 'Building secure and efficient e-commerce platforms to boost online sales and customer engagement.',
        },
    ];

    /* ===================== */
    /* Section: Render Services */
    /* ===================== */

    return (
        <div className="services">
            <h2>Services I Offer</h2>
            <div className="service-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;