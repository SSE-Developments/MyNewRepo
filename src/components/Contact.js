import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Redirect or clear form here
    };

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