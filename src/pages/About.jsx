import { useEffect } from "react"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import BannerImg from "../assets/Banner_About.jpg"
import companyValues from "../datas/company_values.json"

// Affichage d'une bannière et d'une collapse par élément récupéré dans le fichier json
function About() {
    // Actualisation du titre de la page
    useEffect(() => {
        document.title = "Kasa - A Propos"
    })

    return(
        <main className="main__about">
            <Banner image={BannerImg}/>
            <div className="collapses collapses--large">
                {companyValues.map((value) => (
                    <Collapse key={value.id} title={value.title} texte={value.texte} />
                ))}
            </div>
        </main>
    )
}

export default About
