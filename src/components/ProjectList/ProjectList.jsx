'use client';
import React from 'react';
import './styles.css';
import ReactParallaxTilt from 'react-parallax-tilt';
import Spacer from '../Spacer/Spacer';

const PROJECTS = [
    {
        name: 'Project A',
        description: 'Description of Project A',
        link: '#',
        image: 'https://placehold.co/300x200?text=Project+A',
    },
    {
        name: 'Project B',
        description: 'Description of Project B',
        link: '#',
        image: 'https://placehold.co/300x200?text=Project+B',
    },
    {
        name: 'Project C',
        description: 'Description of Project C',
        link: '#',
        image: 'https://placehold.co/300x200?text=Project+C',
    },
    {
        name: 'Project D',
        description: 'Description of Project D',
        link: '#',
        image: 'https://placehold.co/300x200?text=Project+D',
    },
    {
        name: 'Project E',
        description: 'Description of Project E',
        link: '#',
        image: 'https://placehold.co/300x200?text=Project+E',
    },
    {
        name: 'Project F',
        description: 'Description of Project F',
        link: '#',
        image: 'https://placehold.co/300x200?text=Project+F',
    },
    {
        name: 'Project E',
        description: 'Description of Project E',
        link: '#',
        image: 'https://placehold.co/300x200?text=Project+E',
    },
    {
        name: 'Project F',
        description: 'Description of Project F',
        link: '#',
        image: 'https://placehold.co/300x200?text=Project+F',
    },
];

export default function ProjectList() {
    const [projects, setProjects] = React.useState(PROJECTS.slice(0, 3));
    // Show only the first 3 projects for now

    const onShowMoreProjects = () => {
        setProjects(PROJECTS);
    };

    return (
        <div className={'page projects'}>
            <h2>My Projects</h2>
            <div className={'project-list'}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                    />
                ))}
            </div>
            <Spacer height={24} />
            <div className="centered">
                <button
                    hidden={projects.length >= PROJECTS.length}
                    className={'load-more'}
                    onClick={onShowMoreProjects}>
                    Show more
                </button>
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    return (
        <ReactParallaxTilt
            tiltReverse={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}>
            <a className={'project'}>
                <img src={project.image} />
                <div className="project-info">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            </a>
        </ReactParallaxTilt>
    );
}
