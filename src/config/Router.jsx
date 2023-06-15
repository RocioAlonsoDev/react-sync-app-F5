import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from '../components/pages/LandingPage'
import Description from '../components/pages/Description'
import Features from '../components/pages/Features'
import Screens from '../components/pages/Screens'

const RouterItem = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<LandingPage/>} />
                <Route path="/home" element= {<LandingPage/>} />
                <Route path="/description" element= {<Description/>} />
                <Route path="/features" element= {<Features/>} />
                <Route path="/screens" element= {<Screens/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterItem