import React from 'react';
import './Services.css';
import webDevImage from '../images/download.png'; 
import mobileDevImage from '../images/mobile.jpeg';
import seoImage from '../images/seo.jpeg';
import uiuxImage from '../images/unix.png';
import cloudImage from '../images/cloud.jpeg';
import ecommerceImage from '../images/ecommerce.jpeg';

/* File name: Services.js
Student Name: Sadik Elahi
Student ID: 301303846
Date: 2024-09-28
*/



const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'Creating responsive and user-friendly websites to enhance your online presence.',
            image: webDevImage,
        },
        {
            title: 'Mobile Development',
            description: 'Developing mobile applications that provide seamless experiences on both iOS and Android.',
            image: mobileDevImage,
        },
        {
            title: 'SEO Optimization',
            description: 'Improving website visibility and ranking on search engines to drive organic traffic.',
            image: seoImage,
        },
        {
            title: 'UI/UX Design',
            description: 'Designing intuitive interfaces and experiences that engage users and promote usability.',
            image: uiuxImage,
        },
        {
            title: 'Cloud Solutions',
            description: 'Implementing scalable cloud infrastructure to enhance application performance and reliability.',
            image: cloudImage,
        },
        {
            title: 'E-Commerce Development',
            description: 'Building secure and efficient e-commerce platforms to boost online sales and customer engagement.',
            image: ecommerceImage,
        },
    ];

    return (
        <div className="services">
            <h2>Services I Offer</h2>
            <div className="service-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.image} alt={service.title} className="service-image" />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;