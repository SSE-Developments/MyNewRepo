import React from 'react';
import './Home.css'; 
/* File name: Home.js
Student Name: Sadik Elahi
Student ID: 301303846
Date: 2024-09-28
*/

const Home = () => {
    return (
        <div>
            {/* Home Section */}
            <div className="home">
                <h2>Welcome to My Portfolio</h2>
                <p>Hello! My name is Sadik. Feel free to look around this website to learn more about me!</p>
                <p>As a dedicated software engineering student, my mission is to leverage my passion for technology and problem-solving to develop innovative and user-centric software solutions. I hope to become the worlds greatest Software Engineer.</p>

                <a href="#services" className="button">Learn More?</a>
            </div>

            {/* Services Section */}
            <div className="section" id="services">
                <h2>My Top Qualities</h2>
                <p>Here are 3 of my top qualities.</p>
                <div className="card">
                    <h3>Quick Learner</h3>
                    <p>Whatever it may be, I will always learn quickly and adapt.</p>
                </div>
                <div className="card">
                    <h3>Team-Player</h3>
                    <p>Working in a team is never an issue for me</p>
                </div>
                <div className="card">
                    <h3>Dedicated</h3>
                    <p>I am always dedicated to whatever I put my hands on.</p>
                </div>
            </div>

            

            {/* Contact Section */}
            <div className="section" id="contact">
                <h2>Contact Me?</h2>
                <p>Click below to get in touch</p>
                <a href="/contact" className="button">Contact Us</a>
                
            </div>
        </div>
    );
};

export default Home;