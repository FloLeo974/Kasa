import { useState } from "react"
import ArrowSlides from "../assets/Arrow_Slides.svg"

function Slideshow({ pictures }) {
    const [slide, setSlide] = useState(0)
    const previousSlide = () => {setSlide(slide === 0 ? pictures.length -1 : slide -1)}
    const nextSlide = () => {setSlide(slide === pictures.length -1 ? 0 : slide + 1)}
    const noSinglePicture = pictures?.length > 1

    return (
      <div className="slideshow">
        <img className="slideshow__img" src={pictures?.[slide]} alt="logement"/>

        {noSinglePicture && (
          <img className="arrow_slides arrow_left" src={ArrowSlides} alt="flèche vers la gauche" onClick={previousSlide}/>
        )}

        {noSinglePicture && (
          <img className="arrow_slides arrow_right" src={ArrowSlides} alt="flèche vers la droite" onClick={nextSlide}/>
        )}

        {noSinglePicture && (
          <p className="bullet_points">{slide +1}/{pictures?.length}</p>
        )}
      </div>
    )
  }
  
  export default Slideshow