import "./Creations.css"
import CreationComponent from "../../components/CreationComponent/CreationComponent.jsx"
import { db } from "../../db/data.js"
import { useState } from "react"
const Creations = () => {
    const [data] = useState(db)
    return (
        <main className="main-container">
            <h2 className="main-h2">Our Creations</h2>
            {data.map(creation => <CreationComponent key={creation.id} creation={creation} />)}
            <button className="main-button">see all</button>
        </main>
    )
}

export default Creations