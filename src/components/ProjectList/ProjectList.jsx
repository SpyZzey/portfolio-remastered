'use client';
import React from 'react';
import './styles.css';
import ReactParallaxTilt from 'react-parallax-tilt';

export default function ProjectList() {
    // Usage: Just pass the class name you want to animate

    return (
        <div className={'page'}>
            <div className={'project-list'}>
                {/* No event listeners needed here anymore! */}
                <ReactParallaxTilt
                    tiltReverse={true}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}>
                    <a className={'project'}>
                        <h2>Project A</h2>
                    </a>
                </ReactParallaxTilt>
                <ReactParallaxTilt
                    tiltReverse={true}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}>
                    <a className={'project'}>
                        <h2>Project B</h2>
                    </a>
                </ReactParallaxTilt>
                <ReactParallaxTilt
                    tiltReverse={true}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}>
                    <a className={'project'}>
                        <h2>Project C</h2>
                    </a>
                </ReactParallaxTilt>
            </div>
        </div>
    );
}
