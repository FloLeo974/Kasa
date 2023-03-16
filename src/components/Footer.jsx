import { Link } from "react-router-dom"
import logo from '../assets/Logo_Footer.png'

function Footer() {
    return (
        <footer>
            <Link to="/">
                <img src={logo} alt="Logo de Kasa" />
            </Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer