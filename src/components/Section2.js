import React, {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { NavLink } from 'react-router-dom'

const Section2 = () => {
    
    useEffect (() => {
        console.log("changement");
        Aos.init({duration: 1500});
    }, []);

    return (
        <div className="divSection2">
            <h1>Découvrez</h1>
            <NavLink to='/Skills'><button data-aos="zoom-in">Mes compétences</button></NavLink>
            <NavLink to='/Galerie'><button data-aos="zoom-in">Ma galerie</button></NavLink>
            <NavLink to='/Contact'><button data-aos="zoom-in">Mes coordonnées</button></NavLink>
            
        </div>
    )
}

export default Section2