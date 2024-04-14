import "./CreationComponent.css"

const CreationComponent = ({ creation }) => {
    const { title, image,id } = creation
    return (
        <section className={`creation-container background-${id}`} style={{ backgroundImage: `url(${image})` }}>
            <div className="darken-background">
                <h2>{title}</h2>
            </div>
        </section>
    )
}

export default CreationComponent