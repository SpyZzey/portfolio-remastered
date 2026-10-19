import './styles.css';
import { SkillTagGroup } from '../SkillsSection/Skills';
import { SKILLS } from '../../data/skills';
import FunFact from '../FunFact/FunFact';
import { FUN_FACTS } from '../../data/funFacts';

const PARAGRAPHS = [
    `I'm Simon, a software developer who loves building appealing software of all kinds. I live in
    Aachen, Germany, and work as a Frontend Engineer at Amazon Web Services in Berlin.`,
    `I started programming when I was 11, writing extensions for Minecraft with the help of YouTube
    videos. Seeing my own ideas come to life is what got me hooked.`,
    `Wanting to build more than small plugins, I wrote a chat application with Java sockets for a
    school project, my first program without any frameworks or libraries. Then came the web: HTML, CSS
    and JavaScript, and how much you can build with them still amazes me.`,
    `Today I work on my own projects next to my job and keep learning new technologies like Spring
    Boot. These are the tools I use most:`,
];

export default function AboutMe() {
    return (
        <section
            className={'page titled-section'}
            aria-labelledby="about-me-heading">
            <h2
                id="about-me-heading"
                data-reveal="up">
                About Me
            </h2>
            <div
                className="about-me titled-section-content"
                data-reveal="line">
                {PARAGRAPHS.map((text, index) => (
                    <p
                        key={index}
                        data-reveal="up"
                        style={{ '--reveal-delay': `${(index + 1) * 80}ms` }}>
                        {text}
                    </p>
                ))}
                <SkillTagGroup
                    skills={SKILLS}
                    label="Skills"
                    className="skills"
                />
            </div>
            <FunFact
                {...FUN_FACTS.about}
                variant="aside"
                className="about-fun-fact"
            />
        </section>
    );
}
