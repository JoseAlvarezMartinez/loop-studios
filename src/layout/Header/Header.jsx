import { Squash as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import NavBar from "../../components/NavBar/NavBar"
import "./Header.css"

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])
    return (
        <header className="header">
            <section className={`header-navbar ${isOpen && "active"}`}>
                <h1 className="header-h1 color-white">loopstudios</h1>

                <div className="testing">
                    <Hamburger color='#fff' toggled={isOpen} toggle={setOpen} />
                </div>

                <NavBar isOpen={isOpen} />
            </section>

            <div className="header-container">
                <h2 className='color-white header-h2'>immersive experiences that deliver</h2>
            </div>
        </header>
    )
}

export default Header