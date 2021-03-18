import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Banner() {
    return (
        <div className="divBanner">
            <img src="img/dreamesk2.png" alt=""/>
            <Fade left className="fade"><h1>Coucou, moi c'est Louise</h1></Fade>
        </div>
    )
}
