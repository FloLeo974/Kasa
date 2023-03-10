import Banner from "../components/Banner"
import BannerImg from "../assets/Banner_Home.jpg"
import datasLogements from "../datas/logements.json";
import { Link } from "react-router-dom";

function Home() {
    return(
        <main className="main__home">
            <Banner image={BannerImg} texte="Chez vous, partout et ailleurs"/>

            <div className="cards">
                {datasLogements.map(({ id, title, cover }) => (    
                    <Link to={`Logement/:${id}`} className="card" key={id} title={title} id={id} cover={cover}>
                        <img src={cover} alt="" className="card__img" />
                        <p className="cards__title">{title}</p>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default Home