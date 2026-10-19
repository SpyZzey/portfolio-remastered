import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react';
import React from 'react';
import Link from '../Link/Link';
import { SkillTagGroup } from '../SkillsSection/Skills';
import { SKILLS_MAP } from '../../data/skills';
import './styles.css';
import { PROJECTS } from '../../data/projects';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Masonry from 'react-masonry-css';

export default function ProjectDetailPage({ projectId }) {
    const project = React.useMemo(() => {
        return PROJECTS.find((p) => p.id === projectId);
    }, [projectId]);

    return (
        <article className="page project-detail">
            <header className="project-detail-header">
                <Link
                    id="back-home"
                    className="project-back-link"
                    variant="subtle"
                    size="sm"
                    icon={<ArrowLeftIcon />}
                    text="Back to projects"
                    href={`/#project-${project.id}`}
                />

                {/* Text and lead image side by side, so the overview starts high up on the page */}
                <div className="project-intro">
                    <div className="project-intro-text">
                        <div className="project-meta">
                            <span>{project.dateString}</span>
                            {project.warning ? (
                                <span className="project-warning">{project.warning}</span>
                            ) : null}
                        </div>
                        <h1>{project.name}</h1>
                        <p className="project-tagline">{project.description}</p>

                        {project.link || project.github?.length ? (
                            <div className="project-actions">
                                {project.link ? (
                                    <Link
                                        href={project.link}
                                        openInNewTab
                                        variant="solid"
                                        icon={<ExternalLinkIcon />}
                                        iconAlignment="right">
                                        Try it out
                                    </Link>
                                ) : null}
                                {project.github?.map((repo) => (
                                    <Link
                                        key={repo.url}
                                        href={repo.url}
                                        openInNewTab
                                        variant="button"
                                        icon={<GithubIcon />}
                                        iconAlignment="left">
                                        {repo.name}
                                    </Link>
                                ))}
                            </div>
                        ) : null}

                        <SkillTagGroup
                            skills={project.techStack.map((skillKey) => SKILLS_MAP[skillKey]).filter(Boolean)}
                            label="Tech stack"
                            className="tech-stack"
                        />
                    </div>

                    {/* Shares its transition name with the project card image on the home page */}
                    <figure
                        className="project-lead-image"
                        style={{ viewTransitionName: `project-image-${project.id}` }}>
                        <img
                            src={project.image.src}
                            alt={project.image.alt ?? `${project.name} preview`}
                        />
                    </figure>
                </div>
            </header>

            <section
                className="detail-section overview-section"
                aria-labelledby="overview-heading">
                <h2
                    id="overview-heading"
                    data-reveal="up">
                    Overview
                </h2>
                <div
                    className="project-description"
                    data-reveal="up"
                    style={{ '--reveal-delay': '100ms' }}>
                    {project.fullDescription}
                </div>
            </section>

            <section
                className="detail-section gallery-section"
                aria-labelledby="gallery-heading">
                <h2
                    id="gallery-heading"
                    data-reveal="up">
                    Gallery
                </h2>

                <Gallery>
                    <Masonry
                        breakpointCols={{ default: 3, 900: 2, 600: 1 }}
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
