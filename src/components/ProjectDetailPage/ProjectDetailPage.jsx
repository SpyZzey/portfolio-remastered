import { ArrowLeftIcon } from 'lucide-react';
import Link from '../Link/Link';
import { SkillTag } from '../SkillsSection/Skills';
import { SKILLS_MAP } from '../../data/skills';
import './styles.css';

export default function ProjectDetailPage({ project }) {
    const handleBackHomeClick = (event) => {
        if (window.history.length > 1) {
            event.preventDefault();
            window.history.back();
        }
    };

    return (
        <main className="page project-detail">
            <div className="project-detail-header">
                <Link
                    id="back-home"
                    icon={<ArrowLeftIcon />}
                    text="Back to home"
                    href="/"
                    onClick={handleBackHomeClick}
                />

                <div className="project-hero-content">
                    <span>{project.dateString}</span>
                    <h1>{project.name}</h1>
                    <h2>{project.description}</h2>
                </div>

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
            </div>

            <section
                className="project-hero"
                style={{ viewTransitionName: `project-card-${project.id}` }}>
                <img
                    src={project.image}
                    alt={project.name}
                />
            </section>

            <section className="detail-section">
                <h2>Overview</h2>
                <p>{project.fullDescription}</p>
            </section>

            <section className="detail-section">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    {project.gallery.map((image, index) => (
                        <img
                            key={`${project.id}-${index}`}
                            src={image}
                            alt={`${project.name} preview ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
