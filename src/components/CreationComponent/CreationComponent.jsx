import "./CreationComponent.css"

const CreationComponent = ({ creation }) => {
    const { title, image, id } = creation

    return (
        <sections
            style={{ backgroundImage: `url(${image})` }}
            className={`creation-container background-${id}`}
        >
            <div className="darken-background">
                <h2>{title}</h2>
            </div>
        </sections >
    )
}

export default CreationComponent