import React from 'react'

export default function ContactComp() {
    return (
        <div className="divContact">
            <h1>Contactez-moi!</h1>
            <p>Avez-vous une question? Envoyez-moi un message et je vous répondrai au plus vite.</p>
            <div className="divInputs">
                <input type="text" placeholder="Nom"/>
                <input type="text" placeholder="Adresse e-mail"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Votre message"></textarea>
                <button>Envoyer</button>
            </div>
        </div>
    )
}
