'use client';
import React from 'react';
import './styles.css';

const DEFAULT_ENTRIES = [
    {
        title: 'Amazon Web Services',
        description:
            'Currently working as a Frontend Engineer at AWS, working on the Cloudscape Design System to create consistent and accessible user interfaces across AWS products.',
        month: 'October',
        year: '2025',
        image: '/timeline/aws.webp',
    },
    {
        title: 'WorldSkills Germany',
        description:
            'Represented the organization as a competitor at WorldSkills 2024, demonstrating high-level technical skills and performance under pressure in a global competitive environment.',
        month: 'September',
        year: '2024',
        image: '/timeline/worldskills.png',
    },
    {
        title: 'SAP SE',
        description:
            'Gained professional industry experience through an internship and subsequent working student position, contributing to enterprise-level software projects and team workflows.',
        month: 'September',
        year: '2023',
        image: '/timeline/sap.png',
    },
    {
        title: 'RWTH Aachen University',
        description: 'Began undergraduate studies in Computer Science',
        month: 'September',
        year: '2021',
        image: '/timeline/uni_aachen.png',
    },
    {
        title: 'University of Cologne',
        description:
            'Enrolled in Junior Studies while still in high school, gaining early exposure to university-level coursework and academic research methodologies.',
        month: 'April',
        year: '2019',
        image: '/timeline/uni_cologne.png',
    },
    {
        title: 'Silverberg-Gymnasium Bedburg',
        description:
            'Completed secondary education (Abitur) with a focus on core academic subjects, preparing for higher education in STEM fields.',
        month: 'September',
        year: '2013',
        image: '/timeline/high-school.png',
    },
];

export default function Timeline({ entries = DEFAULT_ENTRIES }) {
    if (!entries?.length) {
        return null;
    }

    return (
        <section className="page timeline-section">
            <h2>Timeline</h2>
            <div className="timeline">
                {entries.map((entry, index) => {
                    const sideClass = index % 2 === 0 ? 'left' : 'right';
                    const leftIsText = sideClass === 'left';
                    const dateLabel = entry.yearMonth || [entry.month, entry.year].filter(Boolean).join(' ');
                    const textContent = (
                        <div className="timeline-card timeline-text-card">
                            {dateLabel && <span className="timeline-year">{dateLabel}</span>}
                            <h3>{entry.title}</h3>
                            <p>{entry.description}</p>
                        </div>
                    );

                    const imageContent = entry.image ? (
                        <div className="timeline-image-wrap">
                            <img
                                className="timeline-image"
                                src={entry.image}
                                alt={entry.title}
                            />
                        </div>
                    ) : (
                        <div className="timeline-image-wrap" />
                    );

                    return (
                        <article
                            key={`${entry.title}-${index}`}
                            className={`timeline-item ${sideClass}`}>
                            <div className="timeline-dot" />
                            <div
                                className={`timeline-side timeline-left-side ${leftIsText ? 'timeline-side-text' : 'timeline-side-image'}`}>
                                {leftIsText ? textContent : imageContent}
                            </div>
                            <div
                                className={`timeline-side timeline-right-side ${leftIsText ? 'timeline-side-image' : 'timeline-side-text'}`}>
                                {leftIsText ? imageContent : textContent}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
