import "./NavBar.css"

const NavBar = ({isOpen}) => {
    return (
        <nav className={`navBar ${isOpen ? "navbar-active" : "navbar-inactive"}`}>
            <ul className="navBar-ul">
                <li className="navBar-li"><a className="navBar-enlace" href="#">About</a></li>
                <li className="navBar-li"><a className="navBar-enlace" href="#">Careers</a></li>
                <li className="navBar-li"><a className="navBar-enlace" href="#">Events</a></li>
                <li className="navBar-li"><a className="navBar-enlace" href="#">Products</a></li>
                <li className="navBar-li"><a className="navBar-enlace" href="#">Support</a></li>
            </ul>
        </nav>
    )
}

export default NavBar