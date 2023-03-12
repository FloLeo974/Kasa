import { useEffect } from "react"

function Logement() {

    useEffect(() => {
        document.title = "Kasa - Logement" // à paramétrer avec le nom du logement
    })

    return <div>Logement</div>
}
  
export default Logement
