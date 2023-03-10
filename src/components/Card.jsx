import { Link } from "react-router-dom"
import datasLogements from "../datas/logements.json"

function Card() {
    return(
        <div className="cards">
        {datasLogements.map(( logement ) => (    
            <Link to={`Logement/:${logement.id}`} className="card" key={logement.id}>
                <img src={logement.cover} alt={logement.title}/>
                <p>{logement.title}</p>
            </Link>
        ))}
        </div>
    )
}

export default Card

/* 2ème solution:

function Card({ id, cover, title }) {
    return (
      <Link id={id} className="card" to={`Logement/${id}`}>
        <img src={cover} alt={title} />
        <p></p>
      </Link>
    )
}

*/