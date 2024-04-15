import PresentationImage from "../../assets/image-interactive.jpg"
import "./Presentation.css"

const Presentation = () => {
    return (
        <section className="presentation-container">
            <img className="presentation-image" src={PresentationImage} alt="Imagen del main" />

            <div className="presentation-text-container">
                <h2 className="presentation-h2">The leader in interactive vr</h2>
                <p className="presentation-p">Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                </p>
            </div>
        </section>
    )
}

export default Presentation