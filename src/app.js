import Routing from "./router"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
    return(
        <div className="App">
            <Header />
                <Routing />
            <Footer />
        </div>
    )
}

export default App