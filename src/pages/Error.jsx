import { useEffect } from "react"
import { Link } from "react-router-dom"

// Affichage d'un message indiquant que la page est introuvable et d'un lien de retour à la page d'accueil
function Error() {
    // Actualisation du titre de la page
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
