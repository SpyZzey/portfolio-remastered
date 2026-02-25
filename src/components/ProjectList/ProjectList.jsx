'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import './styles.css';
import ReactParallaxTilt from 'react-parallax-tilt';
import Spacer from '../Spacer/Spacer';
import { PROJECTS } from '../../data/projects';
import Button from '../Button/Button';

export default function ProjectList({ showAll = false }) {
    const [projects, setProjects] = React.useState(showAll ? PROJECTS : PROJECTS.slice(0, 3));
    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    useEffect(() => {
        if (hash === '#projects') {
            setProjects(PROJECTS);
        }
    }, [hash]);

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
                        fromHome={!showAll}
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
                {showAll && projects.length > 3 ? (
                    <Button
                        text="Show less"
                        variant="secondary"
                        onClick={() => setProjects(PROJECTS.slice(0, 3))}
                    />
                ) : null}
            </div>
        </div>
    );
}

function ProjectCard({ project, fromHome = false, expanded = false }) {
    const projectHref = `/projects/${project.id}`;

    return (
        <ReactParallaxTilt
            tiltReverse={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}>
            <a
                className={'project'}
                href={projectHref}
                style={{ viewTransitionName: `project-card-${project.id}` }}>
                <img
                    src={project.image.src}
                    alt={project.name}
                />
                <div className="project-info">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            </a>
        </ReactParallaxTilt>
    );
}
