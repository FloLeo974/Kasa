import { useEffect } from "react"

function Accomodation() {

    useEffect(() => {
        document.title = "Kasa - Logement" // à paramétrer avec le nom du logement
    })

    return <div>Logement</div>
}

export default Accomodation
