import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of Project 1.',
            image: 'project1.png', // Replace with your image path
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2.',
            image: 'project2.png', // Replace with your image path
        },
        {
            title: 'Project 3',
            description: 'Description of Project 3.',
            image: 'project3.png', // Replace with your image path
        },
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;