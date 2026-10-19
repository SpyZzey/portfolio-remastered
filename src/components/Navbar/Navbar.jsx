import './styles.css';
import logoImage from '../../assets/logo_light.webp';

const NAV_LINKS = [
    { href: '/#about-me', label: 'About' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#timeline', label: 'Timeline' },
    { href: '/#contact', label: 'Contact' },
];

// Scroll state (scrolled / hidden) and the current section highlight are handled in Layout.astro
export default function Navbar() {
    return (
        <nav
            className={'navbar'}
            aria-label="Main">
            <div className="navbar-content">
                <a
                    href={'/'}
                    aria-label="Simon Brebeck, home"
                    className={'navbar-logo'}>
                    <img
                        src={logoImage.src}
                        height="36"
                        width="36"
                        alt=""
                    />
                </a>
                <ul className={'navbar-links'}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
