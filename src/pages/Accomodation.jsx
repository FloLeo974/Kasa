import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Collapse from "../components/Collapse"
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

    return(
        <main className="main__accomodation">
            <div className="collapses collapses--small">
                <Collapse 
                    title="Description" 
                    texte={accomodation.description}
                />
                <Collapse 
                    title="Équipements" 
                    texte={accomodation.equipments.map((equipments, index) => (
                        <div key={index}>{equipments}</div>
                    ))}
                />
            </div>
        </main>
    )
}

export default Accomodation
