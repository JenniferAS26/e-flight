import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from '../../assets/icons/logo.svg';
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
                    <div className="link-group">
                        <a href="#">About us</a>
                        <div className="sub-links">
                            <a href="#">How to book</a>
                            <a href="#">Help center</a>
                        </div>
                    </div>
                    <div className="link-group">
                        <a href="#">Flight</a>
                        <div className="sub-links">
                            <a href="#">Booking easily</a>
                            <a href="#">Promotions</a>
                        </div>
                    </div>
                    <div className="link-group">
                        <a href="#">Contact us</a>
                        <div className="social">
                            <FaTwitter />
                            <FaFacebook />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className="subscribe">
                    <div className="input-container">
                        <input type="email" placeholder="input your email" className="email-input" />
                    </div>
                    <button>Subscribete</button>
                </div>
                <div className="copy">
                    © 2021 Company, Inc. • Privacy • Terms
                </div>
            </div>
        </div>
    );
}

export default Footer;
