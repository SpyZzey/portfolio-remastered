import { SOCIAL_LINKS } from '../../data/contact';
import './styles.css';

export default function Footer() {
    return (
        <footer
            className={'footer'}
            data-reveal="line">
            <div className="footer-content">
                <p>
                    &copy; 2021 - {new Date().getFullYear()} Simon Brebeck · <a href="/impress">Impressum</a> · <a href="/privacy">Datenschutz</a>
                </p>
                <ul className="footer-socials">
                    {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${label} (opens in a new tab)`}>
                                <Icon aria-hidden="true" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
