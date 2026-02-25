import './styles.css';
import { SKILLS } from '../../data/skills';

export default function AboutMe() {
    // Usage: Just pass the class name you want to animate

    return (
        <div className={'page centered'}>
            <section className="skills">
                {SKILLS.map((skill) => (
                    <SkillTag
                        key={skill.skill}
                        image={skill.image}
                        skill={skill.skill}
                        url={skill.url}
                    />
                ))}
            </section>
        </div>
    );
}

export function SkillTag({ image, skill, url }) {
    return (
        <a
            className={'skill-tag'}
            href={url}
            target="_blank"
            rel="noopener noreferrer">
            <img
                src={image}
                alt={`${skill} logo`}
                className={'skill-image'}
            />
            <span className={'skill-name'}>{skill}</span>
        </a>
    );
}
