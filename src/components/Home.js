import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this line is present
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to My Portfolio</h2>
            <p>This is my mission statement.</p>
            <Link to="/about" className="button">Learn More About Me</Link>
        </div>
    );
};

export default Home;