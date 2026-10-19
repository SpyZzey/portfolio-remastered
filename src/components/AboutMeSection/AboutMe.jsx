import './styles.css';
import SkillsSection from '../SkillsSection/Skills';
export default function AboutMe() {
    // Usage: Just pass the class name you want to animate

    return (
        <section
            className={'page titled-section'}
            aria-labelledby="about-me-heading">
            <h2
                id="about-me-heading"
                data-reveal="up">
                About Me
            </h2>
            <div className="about-me titled-section-content">
                <p
                    data-reveal="up"
                    style={{ '--reveal-delay': '100ms' }}>
                    I'm Simon, a passionate software developer with a love for creating all kinds of appealing
                    software. Currently, I live in the beautiful city of Aachen, Germany, and working as a
                    Frontend Engineer at Amazon Web Services in Berlin.
                </p>
                <p
                    data-reveal="up"
                    style={{ '--reveal-delay': '200ms' }}>
                    When I was 11 years old, I started programming extensions for a video game called
                    Minecraft with the help of youtube videos. I loved creating my own ideas and seeing them
                    come to life. This is what sparked my interest in programming. But at some point, I wanted
                    to create more than just small Minecraft plugins with Java and MySQL. So I began to learn
                    Sockets to create a Chat Application that I could present as a project in school. This was
                    the first time I programmed something in plain Java without any frameworks or libraries.
                    After that, I started to learn more about web development and created my first website
                    with HTML, CSS and JavaScript. I was amazed by how easy it was to create a website and how
                    much I could do with it. Nowadays, I am working on my own projects and learning new
                    technologies like Spring Boot. See my skills below.
                </p>
            </div>
        </section>
    );
}
