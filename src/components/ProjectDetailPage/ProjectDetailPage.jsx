import { ArrowLeftIcon, ExternalLinkIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { navigate } from 'astro:transitions/client';
import Link from '../Link/Link';
import { SkillTag } from '../SkillsSection/Skills';
import { SKILLS_MAP } from '../../data/skills';
import './styles.css';
import { PROJECTS } from '../../data/projects';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Masonry from 'react-masonry-css';

const NAV_SOURCE_KEY = 'portfolio:project-nav-source';
const NAV_SOURCE_TTL_MS = 2 * 60 * 1000;

export default function ProjectDetailPage({ projectId }) {
    const project = React.useMemo(() => {
        return PROJECTS.find((p) => p.id === projectId);
    }, [projectId]);

    return (
        <main className="page project-detail">
            <div className="project-detail-header">
                <Link
                    id="back-home"
                    icon={<ArrowLeftIcon />}
                    text="Back to home"
                    href="/#projects"
                />

                <div className="project-hero-content">
                    <div className="row">
                        <span>{project.dateString}</span>

                        {project.warning ? <p className="project-warning">{project.warning}</p> : null}
                    </div>
                    <span className="space-between">
                        <h1>{project.name}</h1>
                    </span>
                    <h2>{project.description}</h2>
                </div>

                <div className="row">
                    {project.link ? (
                        <Link
                            className="project-try-link"
                            href={project.link}
                            target="_blank"
                            variant="button"
                            icon={<ExternalLinkIcon />}
                            iconAlignment="right"
                            rel="noopener noreferrer">
                            Try it out
                        </Link>
                    ) : null}
                    {project.github?.map((repo) => (
                        <Link
                            className="project-try-link"
                            href={repo.url}
                            target="_blank"
                            variant="primary"
                            icon={<ExternalLinkIcon />}
                            iconAlignment="right"
                            rel="noopener noreferrer">
                            Github: {repo.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/*
            <section
                className="project-hero"
                style={{ viewTransitionName: `project-card-${project.id}` }}>
                <Gallery>
                    <Item
                        original={project.image.src}
                        thumbnail={project.image.src}
                        width={project.image.width}
                        height={project.image.height}
                        title={`${project.name} preview`}>
                        {({ ref, open }) => (
                            <img
                                ref={ref}
                                onClick={open}
                                src={project.image.src}
                                alt={project.name}
                            />
                        )}
                    </Item>
                </Gallery>
            </section>
*/}
            <section>
                <ul className="tech-stack">
                    {project.techStack.map((skillKey) => {
                        const skill = SKILLS_MAP[skillKey];

                        if (!skill) {
                            return null;
                        }

                        return (
                            <li key={skillKey}>
                                <SkillTag
                                    image={skill.image}
                                    skill={skill.skill}
                                    url={skill.url}
                                />
                            </li>
                        );
                    })}
                </ul>
            </section>
            <hr />

            <section className="detail-section overview-section">
                <h2>Overview</h2>
                <div>{project.fullDescription}</div>
            </section>

            <section className="detail-section gallery-section">
                <h2>Gallery</h2>

                <Gallery>
                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {project.gallery.map((image, index) => (
                            <Item
                                key={index}
                                original={image.src}
                                thumbnail={image.src}
                                width={image.width}
                                height={image.height}
                                title={`${project.name} screenshot ${index + 1}`}>
                                {({ ref, open }) => (
                                    <img
                                        ref={ref}
                                        onClick={open}
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                )}
                            </Item>
                        ))}
                    </Masonry>
                </Gallery>
            </section>
        </main>
    );
}
