import Link from '../components/Link/Link';

const createProject = ({ id, name, subtitle, stack, details, dateString, gallery, warning }) => ({
    id,
    name,
    description: subtitle,
    link: '#',
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
];
