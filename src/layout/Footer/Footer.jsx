import "./Footer.css"
import { AiOutlineFacebook } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const getAnio = () => {
        return new Date().getFullYear();
    }
    return (
        <footer className="footer-container">
            <div className="desktop-container">
                <div className="desktop-left-container">
                    <h2 className="footer-h2">loopstudios</h2>

                    <nav className={`navBar`}>
                        <ul className="navBar-ul navBar-ul-footer">
                            <li className="navBar-li"><a className="navBar-enlace" href="#">About</a></li>
                            <li className="navBar-li"><a className="navBar-enlace" href="#">Careers</a></li>
                            <li className="navBar-li"><a className="navBar-enlace" href="#">Events</a></li>
                            <li className="navBar-li"><a className="navBar-enlace" href="#">Products</a></li>
                            <li className="navBar-li"><a className="navBar-enlace" href="#">Support</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="desktop-right-footer">
                    <div className="logo-container">
                        <AiOutlineFacebook size={"2rem"} color="#fff" />
                        <RiTwitterLine size={"2rem"} color="#fff" />
                        <FaPinterestP size={"2rem"} color="#fff" />
                        <FaInstagram size={"2rem"} color="#fff" />
                    </div>
                    <p className="footer-p">&#169;{getAnio()} Loopstudios. All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer