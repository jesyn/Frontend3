
import "../styles/Navbar.css"
// Observamos que tenemos algo llamado withRouter
import { Link, withRouter } from 'react-router-dom'

import Search from './Search'

export default function Navbar(){
    
        /* ESPACIO DE TRABAJO
        Utilizar withRouter en el componente Search
        */

        return (
            <div className="navbar__container">
                    <Link to="/" className="link"><img width="128px"  src="./images/logo.png" alt="logo" /></Link>
                    <Search />
                    <Link to="/login" className="link">Login</Link>
            </div>
        )

}

//const Navbar = withRouter(Navbar)