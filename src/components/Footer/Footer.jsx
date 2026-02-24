import './styles.css';
export default function Footer() {
    return (
        <footer className={'footer'}>
            <p>&copy; 2021 - {new Date().getFullYear()} Simon Brebeck.</p>
            <a href="impress.html">Impress</a>
        </footer>
    );
}
