import Image from "../atoms/Image"
import Button from "../atoms/Button"
import desc2app from "../../assets/img/description-2-app.png"

export default function Features(){
    return(
       <>
            <main>
                <section id="features">
                <article>
                    <div className="featuresOptions">
                        <button id="featuresOptActive"> Schedule</button>
                        <button id="trackingButton"> Tracking</button>
                        <button id="organizeButton"> Organize</button>
                    </div>
                    <p>
                        <b>Schedule tasks</b> to keep track of their completion. Sync procides multiple scheduling
                        alarms and reminders.
                    </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam dolorum
                            porro perspiciatis, nam voluptate aut laudantium eum necessitatibus, obcaecati 
                            mollitia amet est nesciunt labore minima. Molestias quasi cumque a?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam dolorum
                            porro perspiciatis, nam voluptate aut laudantium eum necessitatibus, obcaecati 
                            mollitia amet est nesciunt labore minima. Molestias quasi cumque a?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam dolorum
                            porro perspiciatis, nam voluptate aut laudantium eum necessitatibus, obcaecati 
                            mollitia amet est nesciunt labore minima. Molestias quasi cumque a?</li>
                    </ul>
                    <a href="https://factoriaf5.org/" target="_blank" rel="noreferrer">
                        <Button className="buttons">TERMS</Button>
                    </a>
                    <a href="https://factoriaf5.org/" target="_blank" rel="noreferrer">
                        <Button className="buttonsAlternative">PRIVACY</Button>
                    </a>
                </article>
                <div id="featuresImgToggle">
                    <Image src={desc2app} alt="Horarios" id="schedule"></Image>
                </div>
                
                </section>
            </main>
        </> 
    )
    
}