import Image from "../atoms/Image"
import Button from "../atoms/Button"
import desc1app from "../../assets/img/description-1-app.png"

export default function Description(){
    return(
       <>
            <main>
                <section id="description">
                    <Image src={desc1app} alt="Vista de la galería de la aplicación."></Image>
                    <article>
                        <h2>Organize Your Time And Start Getting Results</h2>
                        <p>
                            Sync is the first mobile app on the market to harness the power of social 
                            connections to help you stop procrastinating and strar getting things
                            done. Give it a try and see the changes right away.
                        </p>
                        <ul>
                            <li>Analyse and evaluate your current status and productivity</li>
                            <li>Begin monitoring your day to day routine with Sync app</li>
                            <li>See the improved results in no more than a couple weeks</li>
                        </ul>
                        <a href="https://factoriaf5.org/"  target="_blank" rel='noreferrer'>
                            <Button className="buttons">LIGHTBOX</Button> 
                        </a>
                    </article>
                </section>
            </main>
        </> 
    )
    
}