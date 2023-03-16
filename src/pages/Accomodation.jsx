import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Slideshow from "../components/Slideshow"
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"
import accomodations from "../datas/accomodations_list.json"

function Accomodation() {
    const navigate = useNavigate()
    const params = useParams()
    const accomodation = accomodations.find( element => element.id === params.id)

    useEffect(() => {
        if (!accomodation) {
            navigate("/error");
        }
        else {
            document.title = `Kasa - ${accomodation.title}`
        }
    })

    if (accomodation) {
        return(
            <main className="main__accomodation">
                <Slideshow pictures={accomodation.pictures} />
                <div className="logement">
                    <div>
                        <h1 className="logement__title">{accomodation.title}</h1>
                        <p className="logement__location">{accomodation.location}</p>
                        <div className="logement__tags">
                            {accomodation.tags.map((tag, index) => (
                                <div className="logement__tag" key={index}>{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div className="logement__host">
                        <div className="logement__host__identity">
                            <p className="logement__host__name">{accomodation.host.name}</p>
                            <img className="logement__host__photo" src={accomodation.host.picture} alt="propriétaire" />
                        </div>
                        <Rating rating={accomodation.rating} />
                    </div>
                </div>
                <div className="collapses collapses--small">
                    <Collapse 
                        title="Description" 
                        texte={accomodation.description}
                    />
                    <Collapse 
                        title="Équipements" 
                        texte={accomodation.equipments.map((equipment, index) => (
                            <div key={index}>{equipment}</div>
                        ))}
                    />
                </div>
            </main>
        )
    }
}

export default Accomodation
