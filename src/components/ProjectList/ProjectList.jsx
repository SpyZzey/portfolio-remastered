'use client';
import React, { useEffect, useRef } from 'react';
import './styles.css';
import ReactParallaxTilt from 'react-parallax-tilt';
import Spacer from '../Spacer/Spacer';
import { PROJECTS } from '../../data/projects';
import { ArrowUpRightIcon } from 'lucide-react';
import Button from '../Button/Button';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

// Four are rendered so the two-column layout shows two full rows; in the one- and three-column
// layouts the fourth stays hidden until "Show more" (see .project-list[data-collapsed] in styles.css)
const INITIAL_PROJECT_COUNT = 4;

export default function ProjectList({ showAll = false }) {
    const [projects, setProjects] = React.useState(
        showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_PROJECT_COUNT),
    );
    const cardRefs = useRef([]);
    // Index of the first card "Show more" reveals, to move focus there
    const firstNewProjectIndex = useRef(null);
    const returnToProjectId = useRef(null);

    // Arriving via #projects shows the full list. Arriving via #project-<id> (the "Back to projects"
    // link on a project page) also shows it, then returns to that card, which may be past the first three.
    useEffect(() => {
        const { hash } = window.location;
        if (hash.startsWith('#project-')) {
            returnToProjectId.current = hash.slice('#project-'.length);
        }
        if (hash === '#projects' || returnToProjectId.current) {
            setProjects(PROJECTS);
        }
    }, []);

    useEffect(() => {
        // The "Show more" button disappears once clicked, so move focus to the first newly shown project
        if (firstNewProjectIndex.current !== null) {
            cardRefs.current[firstNewProjectIndex.current]?.focus();
            firstNewProjectIndex.current = null;
            return;
        }

        if (returnToProjectId.current) {
            const index = projects.findIndex((project) => project.id === returnToProjectId.current);
            const card = cardRefs.current[index];
            if (!card) return;

            returnToProjectId.current = null;
            card.scrollIntoView({ block: 'center', behavior: 'instant' });
            card.focus({ preventScroll: true });
        }
    }, [projects]);

    const onShowMoreProjects = () => {
        // Cards hidden by CSS have no offsetParent
        firstNewProjectIndex.current = cardRefs.current.filter((card) => card?.offsetParent).length;
        setProjects(PROJECTS);
    };

    const isCollapsed = projects.length < PROJECTS.length;

    return (
        <section
            className={'page projects'}
            aria-labelledby="projects-heading">
            <h2
                id="projects-heading"
                data-reveal="up">
                My Projects
            </h2>
            <div
                id="project-list"
                className={'project-list'}
                data-collapsed={isCollapsed ? '' : undefined}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        id={`project-${project.id}`}
                        className="project-list-item"
                        data-reveal="up"
                        style={{ '--reveal-delay': `${(index % 3) * 90}ms` }}>
                        <ProjectCard
                            ref={(element) => (cardRefs.current[index] = element)}
                            project={project}
                            fromHome={!showAll}
                        />
                    </div>
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
                href={projectHref}>
                {/* Shares its transition name with the lead image on the project page, so it morphs into it */}
                <div
                    className="project-image"
                    style={{
                        viewTransitionName: `project-image-${project.id}`,
                        viewTransitionClass: 'project-image',
                    }}>
                    <img
                        src={project.image.src}
                        alt=""
                    />
                </div>
                <div className="project-info">
                    <h3
                        className="project-card-title"
                        style={{
                            viewTransitionName: `project-title-${project.id}`,
                            viewTransitionClass: 'project-title',
                        }}>
                        {project.name}
                        <ArrowUpRightIcon
                            className="project-arrow"
                            aria-hidden="true"
                        />
                    </h3>
                    <p>{project.description}</p>
                </div>
            </a>
        </ReactParallaxTilt>
    );
}
