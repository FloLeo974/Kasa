import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Logement from './pages/Logement'

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