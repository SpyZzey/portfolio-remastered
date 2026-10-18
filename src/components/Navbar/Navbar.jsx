import './styles.css';
import logoImage from '../../assets/logo.webp';

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
                        height="40"
                        width="40"
                        alt=""
                    />
                </a>
                <div className={'navbar-links'}>
                    <a href={'/#about-me'}>About</a>
                    <a href={'/#projects'}>Projects</a>
                    <a href={'/#timeline'}>Timeline</a>
                </div>
            </div>
        </nav>
    );
}
