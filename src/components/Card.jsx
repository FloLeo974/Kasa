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