import Routing from "./Router"
import Header from "./components/Header"
import Footer from "./components/Footer"

// L'application va retourner pour chaque affichage le header et le footer
// et entre les deux le composant de vue défini par le routage 
function App() {
    return(
        <div>
            <Header />
                <Routing />
            <Footer />
        </div>
    )
}

export default App
