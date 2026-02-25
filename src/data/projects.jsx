import Link from '../components/Link/Link';

const createProject = ({
    id,
    name,
    subtitle,
    github,
    stack,
    details,
    link,
    dateString,
    gallery,
    warning,
}) => ({
    id,
    name,
    description: subtitle,
    link,
    github: github ?? [],
    image:
        gallery && gallery.length > 0
            ? gallery[0]
            : `https://placehold.co/600x400?text=${encodeURIComponent(name)}`,
    dateString,
    fullDescription: details,
    techStack: stack,
    warning: warning,

    gallery: gallery ?? [
        {
            src: `https://placehold.co/1200x700?text=${encodeURIComponent(`${name}+Feature+1`)}`,
            alt: `${name} screenshot 1`,
            width: 1200,
            height: 700,
        },
        {
            src: `https://placehold.co/1200x700?text=${encodeURIComponent(`${name}+Feature+2`)}`,
            alt: `${name} screenshot 2`,
            width: 1200,
            height: 700,
        },
        {
            src: `https://placehold.co/1200x700?text=${encodeURIComponent(`${name}+Feature+3`)}`,
            alt: `${name} screenshot 3`,
            width: 1200,
            height: 700,
        },
    ],
});

export const PROJECTS = [
    createProject({
        id: 'portfolio-2026',
        name: 'Portfolio',
        subtitle: 'The current version of this portfolio website.',
        github: [
            {
                url: 'https://github.com/SpyZzey/portfolio-remastered',
                name: 'Portfolio Remastered',
            },
        ],
        stack: ['astro', 'react', 'typescript', 'css', 'html'],
        dateString: 'Feb 2026 - Present',
        details: (
            <div>
                This is the current version of my portfolio website, built with Astro and React. It features a
                modern design and a dynamic user experience, with smooth animations and transitions. <br />
                <br />
                The website is designed to be responsive and works well on both desktop and mobile devices. It
                is also optimized for performance, with fast loading times and efficient use of resources.{' '}
                <br />
                <br />
                The source code is available on GitHub, and I am continuously working on improving and adding
                new features to the website. <br />
            </div>
        ),
        gallery: [
            {
                src: `/projects/portfolio-2026/portfolio_overview.png`,
                alt: `portfolio current screenshot 1`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/portfolio-2026/portfolio_full.png`,
                alt: `portfolio current screenshot 2`,
                width: 1905,
                height: 3869,
            },
        ],
    }),
    createProject({
        id: 'toolwriter',
        name: 'ToolWriter',
        subtitle: 'A web-based collaborative documentation editor.',
        stack: ['react', 'nodejs', 'supabase', 'html', 'typescript', 'css'],
        dateString: 'Jan 2026',
        warning: `This project is still a work in progress.`,
        link: 'https://toolwriter.simonbrebeck.de',
        details: (
            <div>
                A documentation editor designed to help teams create and maintain documentation for their
                projects. It features real-time collaboration, allowing multiple users to work on the same
                document simultaneously, and a rich text editor with support for markdown syntax. <br />
                <br />
                In addition, a plugin system allows users to extend the functionality of the editor with
                custom features and integrations. <br />
                The integrated AI assistant can help with generating content for users. <br />
                <br />
                <h3>Features</h3>
                <ul>
                    {[
                        'Real-time collaboration',
                        'Markdown support',
                        'Plugin system',
                        'AI content generation',
                        'Multiple workspaces',
                        'Folder/document structure',
                    ].map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </div>
        ),
        gallery: [
            {
                src: `/projects/toolwriter/light_toolwriter_2.png`,
                alt: `toolwriter screenshot 1`,
                width: 1920,
                height: 911,
            },

            {
                src: `/projects/toolwriter/light_toolwriter_0.png`,
                alt: `toolwriter screenshot 2`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/toolwriter/light_toolwriter_1.png`,
                alt: `toolwriter screenshot 3`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/toolwriter/light_toolwriter_2.png`,
                alt: `toolwriter screenshot 4`,
                width: 1920,
                height: 911,
            },

            {
                src: `/projects/toolwriter/light_toolwriter_3.png`,
                alt: `toolwriter screenshot 5`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/toolwriter/dark_toolwriter_0.png`,
                alt: `toolwriter screenshot 6`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/toolwriter/dark_toolwriter_1.png`,
                alt: `toolwriter screenshot 7`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/toolwriter/dark_toolwriter_2.png`,
                alt: `toolwriter screenshot 8`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/toolwriter/dark_toolwriter_3.png`,
                alt: `toolwriter screenshot 9`,
                width: 1920,
                height: 911,
            },
        ],
    }),
    createProject({
        id: 'quirium',
        name: 'quirium',
        subtitle: 'A web-based product management and development design tool.',
        stack: ['angular', 'supabase', 'html', 'typescript', 'css'],
        link: 'https://quirium.app',
        dateString: 'January 2024',
        warning: `This project is still a work in progress.`,
        details: (
            <div>
                A tool that is designed to support the development process of apps. Create database designs,
                export database sql scripts, create wireframes, manage tasks and more... <br />
                <br />
                Implemented with Angular and Supabase, designed to be used by teams in a collaborative way.
                <br />
                <br />
                <span className="dimmed-text">
                    Based on previous work:{' '}
                    <Link
                        href="/projects/database-designer"
                        text="Database Designer"
                    />
                </span>
            </div>
        ),
        gallery: [
            {
                src: `/projects/quirium/gestalt_1.png`,
                alt: `quirium screenshot 1`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/quirium/gestalt_2.png`,
                alt: `quirium screenshot 2`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/quirium/gestalt_3.png`,
                alt: `quirium screenshot 3`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/quirium/gestalt_4.png`,
                alt: `quirium screenshot 4`,
                width: 1920,
                height: 911,
            },
            {
                src: `/projects/quirium/gestalt_5.png`,
                alt: `quirium screenshot 5`,
                width: 1170,
                height: 2532,
            },
            {
                src: `/projects/quirium/gestalt_6.png`,
                alt: `quirium screenshot 6`,
                width: 1170,
                height: 2532,
            },
        ],
    }),
    createProject({
        id: 'database-designer',
        name: 'Database Designer',
        subtitle: 'A web-based tool for designing and visualizing database schemas.',
        stack: ['angular', 'html', 'typescript', 'css'],
        dateString: 'Apr 2024',
        warning: `discontinued`,
        details: (
            <div>
                Only works properly on Chromium-based browsers. <br />
                <br />
                Was mainly developed as a fun project and as a playground for future real-time collaboration
                applications. It allows users to create database tables, define columns with different data
                types, and establish relationships between tables. <br />
            </div>
        ),
        gallery: [
            {
                src: `/projects/dbdesigner/dbdesigner.webp`,
                alt: `database designer screenshot 1`,
                width: 2560,
                height: 1440,
            },
        ],
    }),
    createProject({
        id: 'ellipso',
        name: 'Ellipso',
        subtitle: 'A modern learning management system (LMS) for schools.',
        stack: ['angular', 'java', 'spring', 'mysql', 'html', 'typescript', 'css'],
        dateString: 'Nov 2020 - Nov 2024',
        warning: `discontinued`,
        details: (
            <div>
                {' '}
                Education is an individual process. Nowadays, many learning platforms are still conservative,
                keeping everything unified without having an eye on the unique progress of every student
                individually. <br />
                <br />
                Teachers may also be too stressed to be able to assist single students. Ellipso shifts the
                focus to the individual student, allowing them to have a more personalized experience. Also,
                Ellipso gives the teacher the possibility to use interactive tools, like quizzes and tests, to
                help students reaching the class goal.
            </div>
        ),
        gallery: [
            {
                src: `/projects/ellipso/ellipso.webp`,
                alt: `ellipso screenshot 1`,
                width: 1000,
                height: 500,
            },
        ],
    }),
    createProject({
        id: 'dynamic-storage-system',
        name: 'Dynamic Storage System',
        subtitle: 'A AWS S3 inspired object storage system.',

        github: [
            {
                url: 'https://github.com/SpyZzey/Storage-System--UserAccessLayer',
                name: 'User Access Layer',
            },
            {
                url: 'https://github.com/SpyZzey/Storage-System--FileAccessLayer',
                name: 'File Access Layer',
            },
        ],
        stack: ['java', 'spring', 'mysql'],
        dateString: 'Oct 2022 - Nov 2022',
        warning: `discontinued`,
        details: (
            <div>
                A distributed object storage system inspired by AWS S3, designed to provide scalable and
                reliable storage for large amounts of data. The system is built using Java and Spring Boot,
                with MySQL as the database for metadata storage. <br />
                It is built on two layers: the user access layer and the file access layer. The user access
                layer is responsible for handling incoming user requests, managing access to the database and
                performing file encryption. It communicates with the file access layer, which acts as the
                actual storage service. Together, these two layers provide a dynamic storage system capable of
                securely store files on distributed systems.
                <br />
                <h3>Features</h3>
                <ul>
                    {[
                        'Buckets, Directories, and Files',
                        'Scalability and reliability',
                        'File encryption',
                        'Token-based authentication and authorization',
                    ].map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </div>
        ),
        gallery: [
            {
                src: `/projects/dynamic-storage-system/storage_rest_api_endpoints.png`,
                alt: `dynamic storage system screenshot 1`,
                width: 2278,
                height: 1081,
            },
        ],
    }),
    createProject({
        id: 'portfolio-2022',
        name: 'Old Portfolio',
        subtitle: 'The old version of this portfolio website.',
        github: [
            {
                url: 'https://github.com/SpyZzey/Portfolio',
                name: 'Portfolio',
            },
        ],
        stack: ['html', 'css', 'javascript', 'php', 'mysql'],
        dateString: 'Sep 2022 - Nov 2022',
        warning: `discontinued`,
        details: (
            <div>
                This was the first version of my portfolio website. It was built with vanilla HTML, CSS, and
                JavaScript, with a PHP backend and MySQL database for handling the contact form. <br />
                <br />
                It served its purpose for a while, but I wanted to create a more modern and dynamic portfolio,
                which led to the development of the current version using Astro and React. <br />
            </div>
        ),
        gallery: [
            {
                src: `/projects/portfolio-2022/portfolio_overview.webp`,
                alt: `portfolio old screenshot 1`,
                width: 1000,
                height: 500,
            },
        ],
    }),
    createProject({
        id: 'calendar',
        name: 'Calendar',
        subtitle: 'A simple calendar application.',

        github: [
            {
                url: 'https://github.com/SpyZzey/Calendar',
                name: 'Calendar',
            },
        ],
        stack: ['html', 'css', 'javascript', 'php', 'jquery', 'mysql'],
        dateString: 'Jun 2022 - Sep 2022',
        warning: `discontinued`,
        details: (
            <div>
                {' '}
                Calendar is a web-based calendar application that allows users to create, edit, and delete
                events. The application is built with HTML, CSS, JavaScript, PHP, jQuery, and MySQL. It is
                hosted on a virtual private server with Apache2.
                <br />
                The application is built with a mobile-first approach and is fully responsive. It is designed
                to be used on mobile devices, but can also be used on desktop computers.
                <br />
                <span className="dimmed-text">The design is inspired by Samsung's Calendar app.</span>
                <h3>Features</h3>
                <ul>
                    {['Create, edit, and delete events', 'Dark and light mode'].map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </div>
        ),
        gallery: [
            {
                src: `/projects/calendar/calendar.webp`,
                alt: `calendar screenshot 1`,
                width: 1000,
                height: 500,
            },
            {
                src: `/projects/calendar/calendar_overview_phone.webp`,
                alt: `calendar overview screenshot 2`,
                width: 542,
                height: 906,
            },
            {
                src: `/projects/calendar/calendar_add_event_phone.webp`,
                alt: `calendar add event screenshot 3`,
                width: 542,
                height: 906,
            },
        ],
    }),
];
