import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myImage from '../images/logo.png'; // Replace with your image path

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={myImage} alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><Link to="/MyNewRepo" className={({ isActive }) => (isActive ? 'active' : '')}>Home</Link></li>
                <li><Link to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</Link></li>
                <li><Link to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</Link></li>
                <li><Link to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</Link></li>
                <li><Link to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;