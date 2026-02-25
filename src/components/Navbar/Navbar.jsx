import './styles.css';
import logoImage from '../../assets/logo.webp';

export default function Navbar() {
    return (
        <nav className={'navbar'}>
            <div className="navbar-content">
                <a
                    href={'/'}
                    aria-label="Redirect to homepage of Simon Brebeck"
                    className={'navbar-logo'}>
                    <img
                        src={logoImage.src}
                        height="40"
                        width="40"
                        alt={'Simon Brebeck Logo'}
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
