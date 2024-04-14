import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import "./Header.css"

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <header className="header">
            <section className="header-navbar">
                <h1 className="header-h1 color-white">loopstudios</h1>
                <Hamburger color='#fff' toggled={isOpen} toggle={setOpen} />
            </section>

            <div className="header-container">
                <h2 className='color-white header-h2'>immersive experiences that deliver</h2>
            </div>

        </header>
    )
}

export default Header