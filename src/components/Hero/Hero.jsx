import './styles.css';
import profileImage from '../../assets/profile_hero.webp';
import { useEffect, useRef, useState } from 'react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const CYCLE_ITEMS = ['develop.', 'design.', 'simplify.'];
const NAME = 'Simon Brebeck.';

export default function Hero() {
    const heroRef = useRef(null);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    // Scroll parallax: the layers read --scroll (px) from the hero element and move at their own rate
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero || prefersReducedMotion) return;

        let frameId = null;

        const update = () => {
            frameId = null;
            // No need to keep moving layers once the hero is out of view
            hero.style.setProperty('--scroll', Math.min(window.scrollY, hero.offsetHeight));
        };

        const onScroll = () => {
            frameId ??= requestAnimationFrame(update);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        update();

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(frameId);
            hero.style.removeProperty('--scroll');
        };
    }, [prefersReducedMotion]);

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
            ref={heroRef}
            className="hero"
            aria-label="Introduction">
            <div className="hero-inner">
                <div className="hero-text">
                    <h1>
                        <span
                            className="hero-greeting"
                            data-reveal="up"
                            style={{ '--reveal-delay': '100ms' }}>
                            Hey, I am
                        </span>{' '}
                        <span
                            className="hero-name"
                            data-reveal="up"
                            style={{ '--reveal-delay': '200ms' }}>
                            <span className="sr-only">{NAME}</span>
                            {/* Split into letters for the hover effect; the space stays a plain text node */}
                            <span aria-hidden="true">
                                {NAME.split('').map((char, index) =>
                                    char === ' ' ? (
                                        ' '
                                    ) : (
                                        <span
                                            key={index}
                                            className="hero-name-letter">
                                            {char}
                                        </span>
                                    ),
                                )}
                            </span>
                        </span>
                    </h1>
                    <p
                        className="hero-tagline"
                        data-reveal="up"
                        style={{ '--reveal-delay': '350ms' }}>
                        <span className="sr-only">I like to develop, design, and simplify.</span>
                        <span aria-hidden="true">I like to </span>
                        <span
                            className="text-cycle"
                            aria-hidden="true">
                            <span className="cycle-item">{typedText}</span>
                        </span>
                    </p>
                </div>

                <div className="hero-portrait">
                    <div
                        className="hero-note"
                        aria-hidden="true"
                        data-reveal="note">
                        <span className="hero-note-text">that's me!</span>
                        <svg
                            className="hero-note-arrow"
                            viewBox="0 0 110 80"
                            fill="none">
                            <path
                                pathLength="1"
                                d="M6 12c18-7 44-8 62 4 14 9 22 24 26 44M94 60c-6-5-12-7-19-8M94 60c1-7 4-13 8-18"
                            />
                        </svg>
                    </div>
                    <img
                        src={profileImage.src}
                        alt="Portrait of Simon Brebeck"
                        data-reveal="rise"
                        style={{ '--reveal-delay': '150ms' }}
                        width={421}
                        height={500}
                        fetchPriority="high"
                    />
                </div>
            </div>
        </section>
    );
}
