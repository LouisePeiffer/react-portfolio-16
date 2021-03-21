import React, {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

const Section1 = () => {
    
    useEffect (() => {
        console.log("changement");
        Aos.init({duration: 1500});
    }, []);

    return (
        <div id="bigDivSection1">
            <img src="img/greenleaf.png" alt="" className="feuille"/>
            <div data-aos="fade-right" id="divImgPersonne">
                <img src="img/handcomputercopie.jpg" alt="" className="imgPersonne"/>
            </div>
            <div data-aos="fade-left"id="divTexte">
                <h3>Hello, moi c'est Louise</h3>
                <hr/>
                <p>
                    Après avoir fini mes études secondaires, passé un an aux États-Unis puis étudié en Espagne et travaillé au Panama dans le cadre de mon bachelier de Tourisme, je ne savais toujours pas quoi faire. Par du bouche à oreille, j'ai entendu parler de Molengeek et ai décidé de me lancer dans le code. 
                </p>
            </div>
        </div>
    )
}

export default Section1
