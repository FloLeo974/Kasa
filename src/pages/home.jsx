import Banner from "../components/Banner"
import BannerImg from "../assets/Banner_Home.jpg"

function Home() {
    return(
        <main className="main_home">
            <Banner image={BannerImg} texte="Chez vous, partout et ailleurs"/>
        </main>
    )
}

export default Home
