import './styles.css';
import profileImage from '../../assets/profile.webp';
import { useEffect, useRef, useState } from 'react';
import SparkleBackground from '../SparkleBackground/SparkleBackground';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const CYCLE_ITEMS = ['develop.', 'design.', 'simplify.'];

export default function Hero() {
    const bannerRef = useRef(null);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    // We use refs to store values that change constantly to avoid re-renders
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const requestRef = useRef(null);

    useEffect(() => {
        // 1. The Physics Loop (Running 60fps)
        const animate = () => {
            if (bannerRef.current) {
                // LERP (Linear Interpolation) formula:
                // current = current + (target - current) * friction
                // 0.1 means we move 10% of the way to the target every frame.
                // Lower value (e.g., 0.05) = Heavier/Slower
                // Higher value (e.g., 0.2) = Snappier/Faster
                const ease = 0.05;

                const dx = targetRef.current.x - currentRef.current.x;
                const dy = targetRef.current.y - currentRef.current.y;

                currentRef.current.x += dx * ease;
                currentRef.current.y += dy * ease;

                // Update CSS variables with the "Smoothed" current value
                bannerRef.current.style.setProperty('--mouse-x', `${currentRef.current.x}px`);
                bannerRef.current.style.setProperty('--mouse-y', `${currentRef.current.y}px`);
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        // 2. The Mouse Tracker (Updates the Target only)
        const handleMouseMove = (e) => {
            if (!bannerRef.current) return;

            const rect = bannerRef.current.getBoundingClientRect();
            const bannerCenterX = rect.left + rect.width / 2;
            const bannerCenterY = rect.top + rect.height / 2;

            // Raw difference from center
            const rawX = e.clientX - bannerCenterX;
            const rawY = e.clientY - bannerCenterY;

            // Apply dampening factor (25) here
            targetRef.current.x = rawX / 25;
            targetRef.current.y = rawY / 25;
        };

        // Start the loop and listener
        requestRef.current = requestAnimationFrame(animate);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    useEffect(() => {
        const currentWord = CYCLE_ITEMS[activeItemIndex];
        let timeoutId;

        // Skip the typing animation and show a static word instead
        if (prefersReducedMotion) {
            setTypedText(currentWord);
            return;
        }

        if (!isDeleting && typedText === currentWord) {
            timeoutId = setTimeout(() => setIsDeleting(true), 1100);
        } else if (isDeleting && typedText === '') {
            timeoutId = setTimeout(() => {
                setIsDeleting(false);
                setActiveItemIndex((prev) => (prev + 1) % CYCLE_ITEMS.length);
            }, 200);
        } else {
            const nextLength = typedText.length + (isDeleting ? -1 : 1);
            const speed = isDeleting ? 55 : 95;

            timeoutId = setTimeout(() => {
                setTypedText(currentWord.slice(0, nextLength));
            }, speed);
        }

        return () => clearTimeout(timeoutId);
    }, [activeItemIndex, isDeleting, typedText, prefersReducedMotion]);

    return (
        <section
            className={'hero-container'}
            aria-label="Introduction">
            <SparkleBackground />
            <div className={'hero'}>
                <div className="hero-title">
                    <h1>
                        Hey, I am <br />
                        <span className={'highlight'}>Simon Brebeck</span>.
                    </h1>
                    <h2>
                        <span className="sr-only">I like to develop, design, and simplify.</span>
                        <span aria-hidden="true">I like to </span>
                        <span
                            className="text-cycle"
                            aria-hidden="true">
                            <span className="cycle-item">{typedText}</span>
                        </span>
                    </h2>
                </div>
                {/*
                <div
                    className={'action-banner'}
                    ref={bannerRef}>
                    <div className={'action-banner-step step-1'}>Design</div>
                    <div className={'action-banner-step step-2'}>Invent</div>
                    <div className={'action-banner-step step-3'}>Develop</div>
                </div>
                */}
                <div className={'hero-image'}>
                    <img
                        src={profileImage.src}
                        alt="Portrait of Simon Brebeck"
                        width={421}
                        height={500}
                    />
                </div>

                {/*
                <div className={'whiggly-line'}>
                    <svg
                        preserveAspectRatio="xMinYMin  slice"
                        viewBox="0 0 250 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M 4.203 -9.612 L 6.3215 -1.1388333333333343 C 8.44 7.3343333333333325 12.677000000000001 24.280666666666665 20.137333333333334 39.93783333333334 C 27.59766666666667 55.595 38.281333333333336 69.96300000000001 56.978 75.30499999999999 C 75.67466666666667 80.647 102.38433333333334 76.96300000000001 116.19966666666666 67.10816666666666 C 130.015 57.25333333333333 130.936 41.227666666666664 123.38366666666666 32.1095 C 115.83133333333335 22.991333333333333 99.80566666666668 20.780666666666665 90.04283333333332 28.425166666666666 C 80.28 36.06966666666667 76.78 53.56933333333333 84.42433333333332 68.58200000000001 C 92.06866666666667 83.59466666666667 110.85733333333333 96.12033333333333 133.41049999999998 101.24866666666667 C 155.96366666666665 106.377 182.28133333333332 104.108 207.9705 114.07233333333333 C 233.65966666666668 124.03666666666668 258.7203333333334 146.23433333333332 271.25066666666663 157.33316666666667 L 283.781 168.432"
                            bx:d="M 4.203 -9.612 U 16.914 41.227 U 48.965 84.331 U 129.094 73.279 U 131.857 25.202 U 83.78 18.57 U 73.28 71.069 U 129.646 108.646 U 208.599 101.839 U 283.781 168.432 1@7443ecf3"
                            stroke="#8c40eb22"
                            stroke-width="5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <div className={'hero-border-right'}></div>
                */}
            </div>
        </section>
    );
}
