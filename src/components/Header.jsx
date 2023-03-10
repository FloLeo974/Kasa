import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Logo_Header.png'
 
function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo de Kasa" />
            </Link>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header