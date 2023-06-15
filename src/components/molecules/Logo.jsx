import Image from "../atoms/Image.jsx";
import logo from '../../assets/img/logo.svg'

export default function Logo(){
    return(
        <>
            <a href="/home" >
                <Image src={logo} alt='Logo de la app "Sync".' id='logo'></Image>
            </a>
        </>
    )
}