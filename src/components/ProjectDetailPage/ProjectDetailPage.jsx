import { ArrowLeftIcon, ExternalLinkIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { navigate } from 'astro:transitions/client';
import Link from '../Link/Link';
import { SkillTagGroup } from '../SkillsSection/Skills';
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
        <article className="page project-detail">
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
                    <p className="project-tagline">{project.description}</p>
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
                <SkillTagGroup
                    skills={project.techStack.map((skillKey) => SKILLS_MAP[skillKey]).filter(Boolean)}
                    label="Tech stack"
                    className="tech-stack"
                />
            </section>
            <hr />

            <section
                className="detail-section overview-section"
                aria-labelledby="overview-heading">
                <h2 id="overview-heading">Overview</h2>
                <div>{project.fullDescription}</div>
            </section>

            <section
                className="detail-section gallery-section"
                aria-labelledby="gallery-heading">
                <h2 id="gallery-heading">Gallery</h2>

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
                                    <button
                                        type="button"
                                        className="gallery-thumb"
                                        onClick={open}
                                        aria-label={`Open ${image.alt} in fullscreen`}>
                                        <img
                                            ref={ref}
                                            src={image.src}
                                            alt={image.alt}
                                        />
                                    </button>
                                )}
                            </Item>
                        ))}
                    </Masonry>
                </Gallery>
            </section>
        </article>
    );
}
