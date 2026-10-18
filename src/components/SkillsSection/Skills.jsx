import { useRef, useState } from 'react';
import './styles.css';
import { SKILLS } from '../../data/skills';

export default function AboutMe() {
    // Usage: Just pass the class name you want to animate

    return (
        <div className={'page centered'}>
            <SkillTagGroup
                skills={SKILLS}
                label="Skills"
                className="skills"
            />
        </div>
    );
}

// Toolbar with a roving tabindex: only one tag is in the tab order,
// the arrow keys (and Home/End) move focus between the tags.
export function SkillTagGroup({ skills, label, className }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const tagRefs = useRef([]);

    const onKeyDown = (event) => {
        const lastIndex = skills.length - 1;
        const nextIndex = {
            ArrowRight: activeIndex === lastIndex ? 0 : activeIndex + 1,
            ArrowDown: activeIndex === lastIndex ? 0 : activeIndex + 1,
            ArrowLeft: activeIndex === 0 ? lastIndex : activeIndex - 1,
            ArrowUp: activeIndex === 0 ? lastIndex : activeIndex - 1,
            Home: 0,
            End: lastIndex,
        }[event.key];

        if (nextIndex === undefined) return;

        event.preventDefault();
        setActiveIndex(nextIndex);
        tagRefs.current[nextIndex]?.focus();
    };

    return (
        <ul
            className={className}
            role="toolbar"
            aria-label={label}
            onKeyDown={onKeyDown}>
            {skills.map((skill, index) => (
                <li
                    key={skill.skill}
                    role="none">
                    <SkillTag
                        ref={(element) => (tagRefs.current[index] = element)}
                        image={skill.image}
                        skill={skill.skill}
                        url={skill.url}
                        tabIndex={index === activeIndex ? 0 : -1}
                        onFocus={() => setActiveIndex(index)}
                    />
                </li>
            ))}
        </ul>
    );
}

export function SkillTag({ image, skill, url, ref, ...props }) {
    return (
        <a
            ref={ref}
            className={'skill-tag'}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            {...props}>
            <img
                src={image}
                alt=""
                className={'skill-image'}
            />
            <span className={'skill-name'}>{skill}</span>
            <span className="sr-only">(opens in a new tab)</span>
        </a>
    );
}
