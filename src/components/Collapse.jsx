import { useState } from "react"
import Arrow from "../assets/Arrow.svg"

function Collapse({title, texte}) {
    const [open, setOpen] = useState(false)
    return (
            <div className={`collapse collapse--${open}`}>
                <div className="collapse__title" onClick={() => open === true ? setOpen(false) : setOpen(true)}>
                    <div className="collapse__title__texte">{title}</div>
                    <div className={`collapse__title__arrow--${open}`}>
                        <img className="collapse__title__arrow" src={Arrow} alt="Icône de flèche"/>
                    </div>
                </div>
                {open === true && <div className="collapse__texte">{texte}</div>}
            </div>
    )
}

export default Collapse