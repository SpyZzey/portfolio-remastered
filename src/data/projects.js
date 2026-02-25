const createProject = ({ id, name, subtitle, stack, details, dateString }) => ({
    id,
    name,
    description: subtitle,
    link: '#',
    image: `https://placehold.co/1200x700?text=${encodeURIComponent(name)}`,
    dateString,
    fullDescription: details,
    techStack: stack,

    gallery: [
        `https://placehold.co/1200x700?text=${encodeURIComponent(`${name}+Overview`)}`,
        `https://placehold.co/1200x700?text=${encodeURIComponent(`${name}+Feature+1`)}`,
        `https://placehold.co/1200x700?text=${encodeURIComponent(`${name}+Feature+2`)}`,
    ],
});

export const PROJECTS = [
    createProject({
        id: 'project-a',
        name: 'Project A',
        subtitle: 'A responsive platform focused on performance and clean UX.',
        stack: ['react', 'typescript', 'css', 'git'],
        dateString: 'January 2024',
        details:
            'Project A is a modern web platform designed to deliver fast load times and a polished experience across desktop and mobile. The project emphasizes component reusability, clear information hierarchy, and smooth interactions. It includes reusable UI sections, optimized assets, and a deployment-ready build pipeline.',
    }),
    createProject({
        id: 'project-b',
        name: 'Project B',
        subtitle: 'An interactive dashboard for visualizing product and user metrics.',
        stack: ['react', 'javascript', 'node', 'postgres'],
        dateString: 'March 2024',
        details:
            'Project B provides a full analytics workflow for teams that need to track engagement, conversion, and release impact in one place. It combines API-driven charts, filterable reports, and a user-friendly layout to make complex data easy to navigate. The architecture supports incremental feature additions as reporting needs evolve.',
    }),
    createProject({
        id: 'project-c',
        name: 'Project C',
        subtitle: 'A design-system-driven landing experience for SaaS products.',
        stack: ['html', 'css', 'javascript', 'react'],
        dateString: 'May 2024',
        details:
            'Project C showcases a conversion-focused SaaS marketing site built around a shared design system. Every section follows consistent spacing, typography, and component rules to ensure visual coherence and scalability. The final result is a highly maintainable codebase where new campaign pages can be shipped quickly.',
    }),
    createProject({
        id: 'project-d',
        name: 'Project D',
        subtitle: 'A full-stack content app with search, tagging, and role-based access.',
        stack: ['react', 'node', 'postgres', 'git'],
        dateString: 'June 2024',
        details:
            'Project D is a content-centric application that supports authoring, categorization, and secure access for different user roles. It includes server-side data fetching, structured database models, and an admin workflow for managing publishing states. The UI is optimized for readability and quick content discovery.',
    }),
    createProject({
        id: 'project-e-1',
        name: 'Project E',
        subtitle: 'A portfolio-focused app highlighting storytelling and animations.',
        stack: ['react', 'css', 'javascript', 'vite'],
        dateString: 'June 2024',
        details:
            'Project E blends lightweight motion design with strong visual storytelling to present projects in a memorable way. The experience is intentionally minimal yet expressive, using transitions and layout rhythm to guide attention. It is structured so content updates can be made without rewriting the presentation layer.',
    }),
    createProject({
        id: 'project-f-1',
        name: 'Project F',
        subtitle: 'A productivity web app for planning tasks and weekly goals.',
        stack: ['react', 'vite', 'supabase', 'css'],
        dateString: 'June 2024',
        details:
            'Project F focuses on personal productivity through simple planning, prioritization, and progress tracking. It includes list management, lightweight persistence, and responsive interactions designed for fast daily use. The code is modular to allow future additions like reminders and collaboration features.',
    }),
    createProject({
        id: 'project-e-2',
        name: 'Project E (Case Study 2)',
        subtitle: 'A second iteration emphasizing accessibility and content depth.',
        stack: ['html', 'css', 'typescript', 'react'],
        dateString: 'June 2024',
        details:
            'This variant of Project E extends the original concept with improved accessibility semantics, clearer content flow, and richer project narratives. It introduces stronger keyboard navigation and semantic structure to keep the experience inclusive while preserving the same visual identity.',
    }),
    createProject({
        id: 'project-f-2',
        name: 'Project F (Mobile Focus)',
        subtitle: 'A mobile-first variant optimized for quick interactions and offline use.',
        stack: ['react', 'javascript', 'vite', 'node'],
        dateString: 'June 2024',
        details:
            'This mobile-focused edition of Project F is built for users who need offline-capable planning and fast interactions on smaller screens. It improves startup speed, prioritizes touch ergonomics, and uses progressive enhancement techniques to remain robust across devices and connectivity conditions.',
    }),
];
