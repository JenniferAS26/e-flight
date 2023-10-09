import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from '../../assets/icons/logo.svg'; // Importa el logo SVG
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="logo">
                <img src={logo} alt="E-Flight logo" /> {/* Utiliza la variable "logo" para mostrar la imagen */}
                <span className="name">E-Flight</span>
            </div>
            <div className="links">
                <a href="#">About us</a>
                <a href="#">Flight</a>
                <a href="#">Contact us</a>
                <a href="#">Promotions</a>
            </div>
            <div className="subscribe">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
            <div className="social">
                <FaTwitter />
                <FaFacebook />
                <FaInstagram />
            </div>
            <div className="copy">
                © 2021 Company, Inc. • Privacy • Terms
            </div>
        </div>
    );
}

export default Footer;
