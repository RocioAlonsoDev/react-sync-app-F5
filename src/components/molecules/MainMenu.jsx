import Button from "../atoms/Button.jsx"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import MenuIcon from '@mui/icons-material/Menu'

export default function MainMenu(){

    return(
        <>
            <div id='mainMenu'>
                <Button id="mobileMenuDropdown"><MenuIcon /></Button>

                <ul id="options">
                    <li><a href="/description" className="menuOptions" id="linkDescription">DESCRIPTION</a></li>
                    <li><a href="/features" className="menuOptions" id="linkFeatures">FEATURES</a></li>
                    <li><a href="/screens" className="menuOptions" id="linkScreens">SCREENS</a></li>
                    <div id="dropdown">
                        <button>EXTRA <ArrowDropDownIcon></ArrowDropDownIcon></button>
                        <div id="dropdownMenu">
                            <a href="#">ARTICLE DETAILS</a>
                            <a href="#">TERMS CONDITIONS</a>
                            <a href="#">PRIVACY POLICY</a>
                        </div>
                    </div>

                    <a href="https://factoriaf5.org/" rel='noreferrer' target="_blank">
                        <Button id='download'>DOWNLOAD</Button>
                    </a>
                </ul> 

            </div>
        </>
    )
    
}

