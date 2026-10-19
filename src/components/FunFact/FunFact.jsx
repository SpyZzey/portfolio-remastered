import './styles.css';

const cx = (...classes) => classes.filter(Boolean).join(' ');

/**
 * A handwritten note. Each fact is rendered twice on the page and CSS shows one of them:
 * - variant "aside": next to the thing it's about, large screens only
 * - variant "stacked": centred below its section, smaller screens only
 * The hidden one is display: none, so it's not read out twice. The doodles draw in via the reveal script.
 */
export default function FunFact({ before, highlight, after, variant = 'stacked', className }) {
    return (
        <aside
            className={cx('fun-fact', `fun-fact--${variant}`, variant === 'stacked' && 'page', className)}
            aria-label="Fun fact"
            data-reveal="scribble">
            <div className="fun-fact-note">
                <p className="fun-fact-label">
                    <svg
                        className="fun-fact-star"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true">
                        <path
                            pathLength="1"
                            d="M12 3c.4 3.2.2 6.1-.3 9.3M5.5 7.2c2.4 1.6 5 3.3 7.4 4.6M18.7 6.4c-2.3 1.8-4.6 3.6-6.9 5.2M7 17.8c1.7-1.9 3.4-3.8 5-5.5M17.6 18.1c-1.8-2-3.6-3.9-5.4-5.7"
                        />
                    </svg>
                    fun fact
                </p>
                <p className="fun-fact-text">
                    {before}
                    <span className="fun-fact-highlight">
                        {highlight}
                        <svg
                            className="fun-fact-squiggle"
                            viewBox="0 0 120 12"
                            preserveAspectRatio="none"
                            fill="none"
                            aria-hidden="true">
                            <path
                                pathLength="1"
                                d="M2 8c9-5 17 2 26-1s15-5 24-1 16 3 25 0 15-4 24-1 10 3 17 1"
                            />
                        </svg>
                    </span>
                    {after}
                </p>
            </div>
        </aside>
    );
}
