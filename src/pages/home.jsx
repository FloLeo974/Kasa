import Banner from "../components/Banner"
import BannerImg from "../assets/Banner_Home.jpg"
import Card from "../components/Card"
import datasLogements from "../datas/logements.json"

function Home() {
    return(
        <main className="main__home">
            <Banner image={BannerImg} texte="Chez vous, partout et ailleurs"/>
            <div className="cards">
                {datasLogements.map(({ id, title, cover }) => (
                <Card key={id} title={title} id={id} cover={cover} />
                ))}
            </div>
        </main>
    )
}

export default Home

/* 2ème solution:

function Home() {
    return(
        <main className="main__home">
            <Banner image={BannerImg} texte="Chez vous, partout et ailleurs"/>
            <Card />
        </main>
    )
}

*/