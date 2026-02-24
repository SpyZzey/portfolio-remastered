import './styles.css';

const SKILLS = [
    {
        skill: 'HTML',
        image: '/skills/html.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        skill: 'CSS',
        image: '/skills/css.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        skill: 'JavaScript',
        image: '/skills/javascript.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        skill: 'Typescript',
        image: '/skills/typescript.png',
        url: 'https://www.typescriptlang.org/',
    },
    {
        skill: 'React',
        image: '/skills/react.svg',
        url: 'https://react.dev/',
    },
    {
        skill: 'Angular',
        image: '/skills/angular.png',
        url: 'https://angular.io/',
    },
    {
        skill: 'Vite',
        image: '/skills/vite.svg',
        url: 'https://vitejs.dev/',
    },

    {
        skill: 'Node',
        image: '/skills/node.svg',
        url: 'https://nodejs.org/',
    },
    {
        skill: 'Java',
        image: '/skills/java.png',
        url: 'https://www.java.com/',
    },
    {
        skill: 'Spring Boot',
        image: '/skills/spring.svg',
        url: 'https://spring.io/projects/spring-boot',
    },

    {
        skill: 'Postgres',
        image: '/skills/postgres.svg',
        url: 'https://www.postgresql.org/',
    },
    {
        skill: 'MySQL',
        image: '/skills/mysql.png',
        url: 'https://www.mysql.com/',
    },
    {
        skill: 'Supabase',
        image: '/skills/supabase.svg',
        url: 'https://supabase.com/',
    },

    {
        skill: 'Git',
        image: '/skills/git.svg',
        url: 'https://git-scm.com/',
    },
    {
        skill: 'GitHub',
        image: '/skills/github.webp',
        url: 'https://github.com/',
    },
];

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

function SkillTag({ image, skill, url }) {
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
