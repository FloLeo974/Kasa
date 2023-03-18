import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Accomodation from './pages/Accomodation'

// Affectation des 3 routes définies à nos pages correspondantes
// Affectation de toute autre url à notre page d'erreur
function Routing () {
    return(
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accomodation/:id" element={<Accomodation />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Routing
