import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Error from './pages/error'
import About from './pages/about'
import Logement from './pages/logement'

function Routing () {
    return(
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Routing