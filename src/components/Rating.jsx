import EmptyStar from "../assets/Empty_Star.svg"
import FullStar from "../assets/Full_Star.svg"

function Rating ({ rating }) {
    const numberOfStars = [1, 2, 3, 4, 5]
    return(
        <div className="logement__host__rating">
            {numberOfStars.map((stars) =>
                rating >= stars ? (
                <img className="logement__host__rating__full_star" key={stars} src={FullStar} alt="Étoile pleine" />
                ) : (
                <img className="logement__host__rating__empty_star" key={stars} src={EmptyStar} alt="Étoile vide" />
                )
            )}
        </div>
    )
}

export default Rating