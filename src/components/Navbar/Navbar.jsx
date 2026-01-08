import "./styles.css"
import logoImage from "../../assets/logo.webp";

export default function Navbar() {
    return <nav className={"navbar"}>
        <a href={"/"} className={"navbar-logo"}>
            <img src={logoImage.src} height="40" width="40"/>
        </a>
        <div className={"navbar-links"}>
            <a href={"#"}>Home</a>
            <a href={"#"}>About</a>
            <a href={"#"}>Projects</a>
            <a href={"#"}>Contact</a>
        </div>
    </nav>
}