import { useEffect } from "react"
import Banner from "../components/Banner"
import Card from "../components/Card"
import BannerImg from "../assets/Banner_Home.jpg"
import accomodations_list from "../datas/accomodations_list.json"

function Home() {

    useEffect(() => {
        document.title = "Kasa - Accueil"
    })

    return(
        <main className="main__home">
            <Banner image={BannerImg} texte="Chez vous, partout et ailleurs"/>
            <div className="cards">
                {accomodations_list.map(({ id, title, cover }) => (
                <Card key={id} title={title} id={id} cover={cover} />
                ))}
            </div>
        </main>
    )
}

export default Home
