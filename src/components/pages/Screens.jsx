import Image from "../atoms/Image"
import Button from "../atoms/Button"
import logo1 from "../../assets/img/customer-logo-1.png"
import logo2 from "../../assets/img/customer-logo-2.png"
import logo3 from "../../assets/img/customer-logo-3.png"
import logo4 from "../../assets/img/customer-logo-4.png"
import logo5 from "../../assets/img/customer-logo-5.png"
import downloadIcon from "../../assets/img/download-iphone.png"
import StarIcon from '@mui/icons-material/Star'
import Groups2Icon from '@mui/icons-material/Groups2'
import CodeIcon from '@mui/icons-material/Code'
import SettingsIcon from '@mui/icons-material/Settings'
import ForumIcon from '@mui/icons-material/Forum'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'


export default function Features(){
    return(
       <>
            <main>
                <section id="screens">
                    <h2>User Testimonials</h2>
                    <article className="screensReview">
                        <div className="review">
                            <div>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                            </div>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus omnis natus illo id quo,
                                sequi voluptatum, in tenetur maxime vitae quasi. Accusantium, ullam ducimus. Ipsum ab repellat 
                                harum aliquam!
                            </p>
                            <p><b>Rick Jones - Designer</b></p>
                        </div>
                        <div className="review">
                            <div>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                            </div>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus omnis natus illo id quo,
                                sequi voluptatum, in tenetur maxime vitae quasi. Accusantium, ullam ducimus. Ipsum ab repellat 
                                harum aliquam!
                            </p>
                            <p><b>Rick Jones - Designer</b></p>
                        </div>
                        <div className="review">
                            <div>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                            </div>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus omnis natus illo id quo,
                                sequi voluptatum, in tenetur maxime vitae quasi. Accusantium, ullam ducimus. Ipsum ab repellat 
                                harum aliquam!
                            </p>
                            <p><b>Rick Jones - Designer</b></p>
                        </div>
                    </article>
                    <article id="screensLogos">
                        <Image src={logo1} alt="Logo primester."></Image>
                        <Image src={logo2} alt="Logo green App."></Image>
                        <Image src={logo3} alt="Logo Voltmaster."></Image>
                        <Image src={logo4} alt="Logo Keyrunner."></Image>
                        <Image src={logo5} alt="Logo Aplifier."></Image>
                    </article>
                    <article className="screensReview">
                        <div className="review">
                            <div>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                            </div>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus omnis natus illo id quo,
                                sequi voluptatum, in tenetur maxime vitae quasi. Accusantium, ullam ducimus. Ipsum ab repellat 
                                harum aliquam!
                            </p>
                            <p><b>Rick Jones - Designer</b></p>
                        </div>
                        <div className="review">
                            <div>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                            </div>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus omnis natus illo id quo,
                                sequi voluptatum, in tenetur maxime vitae quasi. Accusantium, ullam ducimus. Ipsum ab repellat 
                                harum aliquam!
                            </p>
                            <p><b>Rick Jones - Designer</b></p>
                        </div>
                        <div className="review">
                            <div>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                            </div>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus omnis natus illo id quo,
                                sequi voluptatum, in tenetur maxime vitae quasi. Accusantium, ullam ducimus. Ipsum ab repellat 
                                harum aliquam!
                            </p>
                            <p><b>Rick Jones - Designer</b></p>
                        </div>
                    </article>
                </section>

                <section id="reviewIcons">
                    <div>
                        <Groups2Icon sx={{ fontSize: 100 }} />
                        <h3>231</h3>
                        <p>Happy Users</p>
                    </div>
                    <div>
                        <CodeIcon sx={{ fontSize: 100 }} />
                        <h3>385</h3>
                        <p>Issues Solved</p>
                    </div>
                    <div>
                        <SettingsIcon sx={{ fontSize: 100 }} />
                        <h3>159</h3>
                        <p>Good Reviews</p>
                    </div>
                    <div>
                        <ForumIcon sx={{ fontSize: 100 }} />    
                        <h3>127</h3>
                        <p>Case Studies</p>
                    </div>
                    <div>
                        <RocketLaunchIcon sx={{ fontSize: 100 }} />
                        <h3>211</h3>
                        <p>Orders Received</p>
                    </div>
                </section>

                <section className="mobilePhoneArt" id="bottomDownload">
                    <Image src={downloadIcon} alt="Móvil con la App de Sync en pantalla."></Image>
                    <p>
                        Do you feel like you re wasting time with small stuff instead of working towards
                        your goals? Start using Sync to organize your time and get a grip on your
                        personal development.
                    </p>
                    <div>
                        <a href="https://factoriaf5.org/" target="_blank" rel="noreferrer">
                            <Button className="buttons">DOWNLOAD</Button>
                        </a>
                        <a href="https://factoriaf5.org/" target="_blank" rel="noreferrer">
                            <Button className="buttons">DOWNLOAD</Button>
                        </a>
                    </div>
                </section>
            </main>
        </> 
    )
    
}