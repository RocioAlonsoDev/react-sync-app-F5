import Button from '../atoms/Button.jsx'
import Image from '../atoms/Image.jsx'

import blueCircle from '../../assets/img/decorative-blue-circle.svg'
import greenDiamond from '../../assets/img/decorative-green-diamond.svg'
import yellowCircle from '../../assets/img/decorative-yellow-circle.svg'
import headerIphone from '../../assets/img/header-iphone.png'

import AppleIcon from '@mui/icons-material/Apple'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Groups2Icon from '@mui/icons-material/Groups2'
import CodeIcon from '@mui/icons-material/Code'
import SettingsIcon from '@mui/icons-material/Settings'
import ForumIcon from '@mui/icons-material/Forum'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

export default function LandingPage(){
    return(
        <>
            <main>
                <section id="decoration">
                    <Image src={blueCircle} alt="Círculo azul decorativo" id="blueCircle"></Image>
                    <Image src={greenDiamond} alt="Rombo verde decorativo" id="greenDiamond"></Image>
                    <Image src={yellowCircle} alt="Círculo amarillo decorativo" id="yellowCircle"></Image>
                </section>
                <section id="banner">
                <h1 id="mainTitle">Mobile App Landing Page</h1>
                    <p>
                        Start focusing on your goals and get more things done with Sync mobile application.
                        It`s the first app to harness the power of social connections to help you stay focused
                        and get organized.
                    </p>
                    <div>
                        <a href="https://factoriaf5.org/" target="_blank" rel='noreferrer'>
                            <Button className="buttons"><AppleIcon /> DOWNLOAD</Button>
                        </a>
                        <a href="https://factoriaf5.org/" target="_blank" rel='noreferrer'>
                            <Button className="buttons"><PlayArrowIcon /> DOWNLOAD</Button>
                        </a>
                    </div>
                </section>
                <section className="mobilePhoneArt">
                    <Image src={headerIphone} alt="Móvil con la App de Sync en pantalla."></Image>
                </section>
                <section id="icons">
            <div>
                <div id="iconGoals">
                    <Groups2Icon sx={{ fontSize: 100 }} />
                </div>
                <p>Identify Goals</p>
            </div>
            <div>
                <div id="iconAnalysis">
                    <CodeIcon sx={{ fontSize: 100 }} />
                </div>
                <p>Situation Analysis</p>
            </div>
            <div>
                <div id="iconTasks">
                    <SettingsIcon sx={{ fontSize: 100 }} />
                </div>
                <p>Tasks Settings</p>
            </div>
            <div>
                <div id="iconSocial">
                    <ForumIcon sx={{ fontSize: 100 }} />
                </div>
                <p>Social Interaction</p>
            </div>
            <div>
                <div id="iconRocket">
                    <RocketLaunchIcon sx={{ fontSize: 100 }} />
                </div>
                <p>Get Things Done</p>
            </div>
        </section>
            </main>
        </>
    )
}

