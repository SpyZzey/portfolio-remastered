'use client';
import React from 'react';
import './styles.css';
import ReactParallaxTilt from 'react-parallax-tilt';
import Spacer from '../Spacer/Spacer';
import { PROJECTS } from '../../data/projects';
import Button from '../Button/Button';

const NAV_SOURCE_KEY = 'portfolio:project-nav-source';

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
            </div>
        </div>
    );
}

function ProjectCard({ project, fromHome = false }) {
    const projectHref = `/projects/${project.id}`;

    const handleProjectClick = () => {
        if (!fromHome) {
            return;
        }

        const navSource = {
            fromHome: true,
            targetPath: projectHref,
            createdAt: Date.now(),
        };

        window.sessionStorage.setItem(NAV_SOURCE_KEY, JSON.stringify(navSource));
    };

    return (
        <ReactParallaxTilt
            tiltReverse={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}>
            <a
                className={'project'}
                href={projectHref}
                onClick={handleProjectClick}
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
