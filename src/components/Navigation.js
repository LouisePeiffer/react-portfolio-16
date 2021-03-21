import React, { Fragment,useState, useEffect  } from 'react'
import { NavLink } from 'react-router-dom'


export default function Navigation() {
    
    const [toggleMenu, setToggleMenu] = useState(false)
    const [largeur, setLargeur] = useState(window.innerWidth)   // on le démarra à la largeur à l'instant du site
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
        const changeTaille = () => {
            setLargeur(window.innerWidth)
            if (window.innerWidth >500) {
                setToggleMenu(false)
            }
        }
        window.addEventListener('resize', changeTaille)
    }, [largeur])

    
    return (
        <Fragment>
            <div className="leBurger">
                <div>
                    <button onClick={toggleNav} className="hamburger">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {(largeur > 1030 || toggleMenu) && (
                    <div className="links">
                        <NavLink to='/' exact>
                            About
                        </NavLink>
                        <NavLink to='/Skills' exact>
                            Skills
                        </NavLink>
                        <NavLink to='/Galerie' exact>
                            Galerie
                        </NavLink>
                        <NavLink to='/Contact' exact>
                            Contact
                        </NavLink>
                    </div>
                )}
            </div>

            <div className="divNavlink">
                <NavLink to='/' className="navlink">À propos</NavLink>
                <NavLink to='/Skills' className="navlink">Mon expérience</NavLink>
            </div>
            <NavLink  to='/'><img src="img/dessinordi.png" alt="" className="imgLogo"/></NavLink>
            <div className="divNavlink">
                <NavLink to='/Galerie' className="navlink">Galerie</NavLink>
                <NavLink to='/Contact' className="navlink">Contact</NavLink>
            </div>
            
        </Fragment>
    )
}
