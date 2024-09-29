import React from 'react';
import './About.css';
import myImage from '../images/me.png'; // Replace with your image path

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <img src={myImage} alt="My Portrait" />
            <p>My name is Sadik Elahi. I am currently a student at Centennial College on a path to become a Software Engineer.</p>
            <p>I am a passionate software engineer with experience in building dynamic websites and contributing to projects in the telecommunications and construction industries. My diverse background has equipped me with a unique perspective on how technology can enhance business operations and improve user experiences. Outside of my professional pursuits, I enjoy archery, which helps me focus and develop patience—qualities that I bring to my work in software development. I’m always eager to learn and grow, both in my career and as a person.</p>
            <a href='../images/Resume.pdf' download>Download My Resume</a>
        </div>
    );
};

export default About;