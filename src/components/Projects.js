import React from 'react';
import './Projects.css';
import project1Image from '../images/Project1.png'; // Adjust the path as needed
import project2Image from '../images/Project2.png'; // Add the correct import
import project3Image from '../images/Project3.jpg'; // Add the correct import

const Projects = () => {
    const projects = [
        {
            title: 'Web Development Agency',
            description: 'In this project, I developed a professional web development agency website using WordPress. The site features a clean, modern design that showcases our services, portfolio, and client testimonials. Leveraging WordPress’s customizable themes and plugins, I created an intuitive navigation experience, allowing users to easily explore various service offerings. The site also includes a dynamic blog section for sharing industry insights and updates. This project highlights my ability to build functional and visually appealing websites while utilizing WordPress as a powerful content management system.',
            image: project1Image,
        },
        {
            title: 'Driving School Management System',
            description: 'This Driving School Booking Management System is designed to simplify the process of scheduling and managing driving lessons for both instructors and students. The platform provides a seamless user experience, allowing driving schools to efficiently handle bookings, instructor assignments, and student progress.',
            image: project2Image,
        },
        {
            title: 'Logo Design and Development',
            description: 'Designed a modern and dynamic logo for a driving school that effectively communicates safety, reliability, and professionalism. The logo features a sleek car silhouette combined with a road graphic, symbolizing the journey and progress of learning to drive. The color palette of blue and green conveys trust and growth, while the bold typography ensures clear visibility. This logo aims to establish a strong brand identity and resonate with both students and parents seeking quality driving education.',
            image: project3Image,
        },
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;