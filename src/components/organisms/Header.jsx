import Logo from "../molecules/Logo.jsx"
import MainMenu from "../molecules/MainMenu.jsx"

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <Logo></Logo>
                    <MainMenu></MainMenu>
                </nav>
            </header>
        </>
    )
}

