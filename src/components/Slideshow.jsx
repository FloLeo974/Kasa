import { useState } from "react"
import ArrowSlides from "../assets/Arrow_Slides.svg"

// Affichage d'un carrousel dans lequel on peut naviguer d'une photo à l'autre à l'aide de flèches
// Les flèches et un bullet points sont ajoutés s'il y a plusieurs photos
function Slideshow({ pictures }) {
  const [slide, setSlide] = useState(0)
  const previousSlide = () => {setSlide(slide === 0 ? pictures.length -1 : slide -1)}
  const nextSlide = () => {setSlide(slide === pictures.length -1 ? 0 : slide + 1)}

  return (
    <div className="slideshow">
      <img className="slideshow__img" src={pictures?.[slide]} alt="logement"/>

      {pictures?.length > 1 && (
        <div>
          <img className="arrow_slides arrow_left" src={ArrowSlides} alt="flèche vers la gauche" onClick={previousSlide}/>
          <img className="arrow_slides arrow_right" src={ArrowSlides} alt="flèche vers la droite" onClick={nextSlide}/>
          <p className="bullet_points">{slide +1}/{pictures?.length}</p>
        </div>
      )}
    </div>
  )
}

export default Slideshow