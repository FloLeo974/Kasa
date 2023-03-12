import { useEffect } from "react"
import Banner from "../components/Banner"
import BannerImg from "../assets/Banner_About.jpg"

function About() {

    useEffect(() => {
        document.title = "Kasa - A Propos"
    })

    return(
        <main className="main__about">
            <Banner image={BannerImg}/>
        </main>
    )
}

export default About
