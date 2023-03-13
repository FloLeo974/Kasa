import { useState } from "react"
import arrow from "../assets/Arrow.svg"

// en mode fonction
function Collapse({title, texte}) {
    const [open, setOpen] = useState(false)
    return (
            <div className="collapse">
                <div className="collapse__title" onClick={() => open === true ? setOpen(false) : setOpen(true)}/* true */>
                    <div className="collapse__title__texte">{title}</div>
                    <div className={`collapse__title__arrow--${open}`}>
                        <img src={arrow} alt="Icône de flèche"/>
                    </div>
                </div>
                {open === true && <div className="collapse__texte">{texte}</div>}
            </div>
    )
}

export default Collapse