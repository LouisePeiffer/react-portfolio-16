import React,{useState, useEffect} from 'react'

export default function GalerieComp() {
    const [chemin, setChemin] = useState("")
        useEffect(() => {
            let random = () => {
                let copieUrl = chemin
                copieUrl = Math.round(Math.random()*(2-1)+1)
                setChemin(copieUrl);
            }
            random();
        }, [chemin]);

        const data = [
            {titre: 'emporium', link:'img/emporium.jpg'},
            {titre: 'Site du chef', link:'img/sitechef.jpg'},
            {titre: 'Kenya', link:'img/kenya.jpg'},
            {titre: 'emporium', link:'img/emporium.jpg'},
            {titre: 'Site du chef', link:'img/sitechef.jpg'},
            {titre: 'Kenya', link:'img/kenya.jpg'},
        ]

        return (
            <main className='main'>
                {data.map((el,i) => {
                    return (
                        <div key={i} className='coucou'>
                            <div className="image-info">
                                {/* <h2 className="mb-3">{el.titre}</h2> */}
                            </div>
                            <img src={el.link} alt="catergo" className='img-fluid'/>
                        </div>
                    )
                    })}
            </main>
        )
}
