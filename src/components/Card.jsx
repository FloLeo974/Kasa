import { Link } from "react-router-dom"

function Card({ id, cover, title }) {
    return (
      <Link id={id} className="card" to={`accomodation/${id}`}>
        <img src={cover} alt={title} />
        <p>{title}</p>
      </Link>
    )
}

export default Card

/* 2ème solution:

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

*/
