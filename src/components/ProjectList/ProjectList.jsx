'use client';
import React from 'react';
import './styles.css';
import ReactParallaxTilt from 'react-parallax-tilt';
import Spacer from '../Spacer/Spacer';
import { PROJECTS } from '../../data/projects';
import Button from '../Button/Button';

export default function ProjectList({ showAll = false }) {
    const [projects, setProjects] = React.useState(showAll ? PROJECTS : PROJECTS.slice(0, 3));
    // Show only the first 3 projects for now

    const onShowMoreProjects = () => {
        setProjects(PROJECTS);
    };

    return (
        <div className={'page projects'}>
            <h2>My Projects</h2>
            <div className={'project-list'}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
            <Spacer height={24} />
            <div className="centered">
                {showAll || projects.length >= PROJECTS.length ? null : (
                    <Button
                        text="Show more"
                        variant="primary"
                        onClick={onShowMoreProjects}
                    />
                )}
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
            <a
                className={'project'}
                href={`/projects/${project.id}`}
                style={{ viewTransitionName: `project-card-${project.id}` }}>
                <img src={project.image} />
                <div className="project-info">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            </a>
        </ReactParallaxTilt>
    );
}
