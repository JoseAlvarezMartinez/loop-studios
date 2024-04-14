import "./Footer.css"
import NavBar from "../../components/NavBar/NavBar"
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
            <h2 className="footer-h2">loopstudios</h2>

            <NavBar />

            <div className="logo-container">
                <AiOutlineFacebook size={"2rem"} color="#fff" />
                <RiTwitterLine size={"2rem"} color="#fff" />
                <FaPinterestP size={"2rem"} color="#fff" />
                <FaInstagram size={"2rem"} color="#fff" />
            </div>
            <p className="footer-p">&#169;{getAnio()} Loopstudios. All rights reserved.</p>
        </footer>

    )
}

export default Footer