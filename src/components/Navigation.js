import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <Fragment>
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
