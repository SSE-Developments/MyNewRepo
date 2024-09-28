import React from 'react';
import './About.css';
import myImage from '../logo.svg'; // Replace with your image path

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <img src={myImage} alt="My Portrait" />
            <p>My name is [Your Name]. I am a [Your Profession].</p>
            <a href="/resume.pdf" download>Download My Resume</a>
        </div>
    );
};

export default About;