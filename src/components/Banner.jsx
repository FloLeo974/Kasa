// Affichage d'une bannière avec une photo et un texte
function Banner({image, texte})
    {
        return (
            <div className="banner">
                <img src={image} alt="paysage de côte rocheuse" />
                <p className="banner_txt">{texte}</p>
            </div>
        )
    }

export default Banner