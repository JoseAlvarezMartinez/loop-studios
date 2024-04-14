import MainImage from "../../assets/image-interactive.jpg"
import "./Main.css"

const Main = () => {
    return (
        <main className="main-container">
            <img className="main-image" src={MainImage} alt="Imagen del main" />

            <h2 className="main-h2">The leader in interactive vr</h2>
            <p className="main-p">Founded in 2011, Loopstudios has been producing world-class virtual reality
                projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
        </main>
    )
}

export default Main