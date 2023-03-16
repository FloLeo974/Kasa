import { useEffect } from "react"
import { Link } from "react-router-dom"

function Error() {

    useEffect(() => {
        document.title = "Kasa - Page introuvable"
    })

    return (
        <main className="main__error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <div className="back_Home">
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        </main>
    )
}

export default Error
