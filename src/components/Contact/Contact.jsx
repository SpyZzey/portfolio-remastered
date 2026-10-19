import { ArrowUpRightIcon } from 'lucide-react';
import { EMAIL, SOCIAL_LINKS } from '../../data/contact';
import './styles.css';

export default function Contact() {
    return (
        <section
            className="page titled-section contact"
            aria-labelledby="contact-heading">
            <h2
                id="contact-heading"
                data-reveal="up">
                Contact
            </h2>
            <div
                className="titled-section-content"
                data-reveal="line">
                <p
                    className="contact-intro"
                    data-reveal="up"
                    style={{ '--reveal-delay': '100ms' }}>
                    Have a project in mind, a question, or just want to say hi? Send me an email.
                </p>
                <a
                    className="contact-email"
                    href={`mailto:${EMAIL}`}
                    data-reveal="up"
                    style={{ '--reveal-delay': '200ms' }}>
                    {EMAIL}
                    <ArrowUpRightIcon
                        className="contact-email-arrow"
                        aria-hidden="true"
                    />
                </a>
                <ul
                    className="contact-socials"
                    data-reveal="up"
                    style={{ '--reveal-delay': '300ms' }}>
                    {SOCIAL_LINKS.map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer">
                                {label}
                                <span className="sr-only">(opens in a new tab)</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
