import BannerImg from "../assets/Banner_Home.jpg"
import Banner from "../components/Banner"
import Card from "../components/Card"

function Home() {
    return(
        <main className="main__home">
            <Banner image={BannerImg} texte="Chez vous, partout et ailleurs"/>
            <Card />
        </main>
    )
}

export default Home

/* 2ème solution:

import datasLogements from "../datas/logements.json"
import { Link } from "react-router-dom";

            <div className="cards">
                {datasLogements.map(( logement ) => (    
                    <Link to={`Logement/:${logement.id}`} className="card" key={logement.id}>
                        <img src={logement.cover} alt={logement.title}/>
                        <p>{logement.title}</p>
                    </Link>
                ))}
            </div>

*/