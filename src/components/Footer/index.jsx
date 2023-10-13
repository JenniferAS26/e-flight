import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from '../../assets/icons/logo.svg';
import letterIcon from '../../assets/icons/letter.svg';
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="contenedor">
                <div className="logo">
                    <img src={logo} alt="E-Flight logo" />
                    <span className="name">E-Flight</span>
                </div>
                <div className="links">
                    <a href="#">About us</a>
                    <a href="#">Flight</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="subscribe">
                    <div className="input-container">
                        <input type="email" placeholder="input your email" className="email-input" />
                        <img src={letterIcon} alt="Email Icon" className="input-icon" />
                    </div>
                    <button>Subscribete</button>
                </div>
                <div className="sub-links">
                    <div className="about">
                        <a href="#">How to book</a>
                        <a href="#">Help center</a>
                    </div>
                    <div className="contact">
                        <a href="#">Booking easily</a>
                        <a href="#">Promotions</a>
                    </div>
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
        </div>
    );
}

export default Footer;
