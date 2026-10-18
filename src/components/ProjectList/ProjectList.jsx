'use client';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './styles.css';
import ReactParallaxTilt from 'react-parallax-tilt';
import Spacer from '../Spacer/Spacer';
import { PROJECTS } from '../../data/projects';
import Button from '../Button/Button';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const INITIAL_PROJECT_COUNT = 3;

export default function ProjectList({ showAll = false }) {
    const [projects, setProjects] = React.useState(
        showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_PROJECT_COUNT),
    );
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const cardRefs = useRef([]);
    const focusFirstNewProject = useRef(false);

    useEffect(() => {
        if (hash === '#projects') {
            setProjects(PROJECTS);
        }
    }, [hash]);

    // The "Show more" button disappears once clicked, so move focus to the first newly shown project
    useEffect(() => {
        if (!focusFirstNewProject.current) return;

        focusFirstNewProject.current = false;
        cardRefs.current[INITIAL_PROJECT_COUNT]?.focus();
    }, [projects]);

    const onShowMoreProjects = () => {
        focusFirstNewProject.current = true;
        setProjects(PROJECTS);
    };

    return (
        <section
            className={'page projects'}
            aria-labelledby="projects-heading">
            <h2 id="projects-heading">My Projects</h2>
            <div
                id="project-list"
                className={'project-list'}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        ref={(element) => (cardRefs.current[index] = element)}
                        project={project}
                        fromHome={!showAll}
                    />
                ))}
            </div>
            <Spacer height={24} />
            <div className="centered">
                {showAll || projects.length >= PROJECTS.length ? null : (
                    <Button
                        text="Show more projects"
                        variant="primary"
                        aria-controls="project-list"
                        aria-expanded={false}
                        onClick={onShowMoreProjects}
                    />
                )}
                {showAll && projects.length > INITIAL_PROJECT_COUNT ? (
                    <Button
                        text="Show fewer projects"
                        variant="secondary"
                        aria-controls="project-list"
                        aria-expanded={true}
                        onClick={() => setProjects(PROJECTS.slice(0, INITIAL_PROJECT_COUNT))}
                    />
                ) : null}
            </div>
        </section>
    );
}

function ProjectCard({ project, ref, fromHome = false, expanded = false }) {
    const projectHref = `/projects/${project.id}`;
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <ReactParallaxTilt
            tiltEnable={!prefersReducedMotion}
            tiltReverse={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}>
            <a
                ref={ref}
                className={'project'}
                href={projectHref}
                style={{ viewTransitionName: `project-card-${project.id}` }}>
                <img
                    src={project.image.src}
                    alt=""
                />
                <div className="project-info">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            </a>
        </ReactParallaxTilt>
    );
}
