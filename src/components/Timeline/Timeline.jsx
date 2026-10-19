'use client';
import React from 'react';
import './styles.css';
import FunFact from '../FunFact/FunFact';
import { FUN_FACTS } from '../../data/funFacts';

const DEFAULT_ENTRIES = [
    {
        title: 'Amazon Web Services',
        description:
            'Currently working as a Frontend Engineer at AWS, working on the Cloudscape Design System to create consistent and accessible user interfaces across AWS products.',
        dateString: 'Oct 2025 - present',
        image: '/timeline/aws.webp',
    },
    {
        title: 'EuroSkills Herning 2025',
        description: `Represented Germany as a competitor at EuroSkills Herning 2025
             in Software Applications Development, 
             winning the gold medal in Speed Programming and placing 2nd in Software Applications Development.`,
        dateString: 'September 2025',
        image: '/timeline/euroskills_herning_2025.webp',
        funFact: FUN_FACTS.euroskills,
    },
    {
        title: 'WorldSkills Lyon 2024',
        description: `Represented Germany as a competitor at WorldSkills Lyon 2024 in Software Applications Development, 
            winning the silver medal in Speed Programming and a Medallion of Excellence in Software Applications Development.`,
        dateString: 'September 2024',
        image: '/timeline/worldskills_lyon_2024.webp',
    },
    {
        title: 'SAP SE',
        description: `Worked as a Software Development Intern at SAP SE,
         later transitioning to a working student role, planning, designing, and implementing an internal tool using React, SAP CAP with Node.js and HANA Cloud`,
        dateString: 'Sep 2023 - Sep 2024',
        image: '/timeline/sap.webp',
    },
    {
        title: 'RWTH Aachen University',
        description: `Completed a Bachelor's degree in Computer Science.`,
        dateString: 'Sep 2021 - Sep 2025',
        image: '/timeline/rwth_aachen.svg',
    },
    {
        title: 'University of Cologne',
        description: `Enrolled in Junior Studies while still in high school.`,
        dateString: 'April 2019 - Sep 2020',
        image: '/timeline/uni_cologne.svg',
        funFact: FUN_FACTS.juniorStudies,
    },
    {
        title: 'Silverberg-Gymnasium Bedburg',
        description: `Completed secondary education (Abitur) with a focus on mathematics and physics, 
        graduating with honors in mathematics, physics, computer science, and philosophy`,
        dateString: 'Sep 2013 - Jul 2021',
        image: '/timeline/high-school.webp',
    },
];

export default function Timeline({ entries = DEFAULT_ENTRIES }) {
    if (!entries?.length) {
        return null;
    }

    return (
        <section
            className="page timeline-section"
            aria-labelledby="timeline-heading">
            <h2
                id="timeline-heading"
                data-reveal="up">
                Timeline
            </h2>
            <ol
                className="timeline"
                data-reveal="line">
                {entries.map((entry, index) => {
                    const sideClass = index % 2 === 0 ? 'left' : 'right';
                    const leftIsText = sideClass === 'left';
                    const dateLabel = entry.dateString ? entry.dateString : null;
                    const textContent = (
                        <div
                            className="timeline-card timeline-text-card"
                            data-reveal={leftIsText ? 'left' : 'right'}>
                            {dateLabel && <span className="timeline-year">{dateLabel}</span>}
                            <h3>{entry.title}</h3>
                            <p>{entry.description}</p>
                        </div>
                    );

                    const image = entry.image ? (
                        <div
                            className="timeline-image-wrap"
                            data-reveal={leftIsText ? 'right' : 'left'}
                            style={{ '--reveal-delay': '120ms' }}>
                            <img
                                className="timeline-image"
                                src={entry.image}
                                alt=""
                            />
                        </div>
                    ) : (
                        <div className="timeline-image-wrap" />
                    );
                    // Large screens: the fun fact sits next to the image, on the side away from the line
                    const funFact = entry.funFact ? (
                        <FunFact
                            {...entry.funFact}
                            variant="aside"
                            className="timeline-fun-fact"
                        />
                    ) : null;
                    const imageContent = leftIsText ? (
                        <>
                            {image}
                            {funFact}
                        </>
                    ) : (
                        <>
                            {funFact}
                            {image}
                        </>
                    );

                    return (
                        <li
                            key={`${entry.title}-${index}`}
                            className={`timeline-item ${sideClass}`}>
                            <div
                                className="timeline-dot"
                                aria-hidden="true"
                                data-reveal="pop"
                                style={{ '--reveal-delay': '200ms' }}
                            />
                            <div
                                className={`timeline-side timeline-left-side ${leftIsText ? 'timeline-side-text' : 'timeline-side-image'}`}>
                                {leftIsText ? textContent : imageContent}
                            </div>
                            <div
                                className={`timeline-side timeline-right-side ${leftIsText ? 'timeline-side-image' : 'timeline-side-text'}`}>
                                {leftIsText ? imageContent : textContent}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
