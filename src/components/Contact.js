import React, { useState } from 'react';
import './Contact.css';
/* File name: Contact.js
Student Name: Sadik Elahi
Student ID: 301303846
Date: 2024-09-28
*/

/* ===================== */
/* Section: Contact Component */
/* ===================== */

const Contact = () => {
    /* ===================== */
    /* Section: State Management */
    /* ===================== */

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    /* ===================== */
    /* Section: Handle Input Change */
    /* ===================== */

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    /* ===================== */
    /* Section: Handle Form Submission */
    /* ===================== */

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Redirect or clear form here
    };

    /* ===================== */
    /* Section: Render Component */
    /* ===================== */

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input type="tel" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;