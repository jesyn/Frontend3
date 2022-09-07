import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <nav className='nav_bar'>
            <Link to='/'><p>Home</p></Link>
            <Link to='/pokemon'><p>PokeList</p></Link>
            <Link to='/type'><p>Tipos</p></Link>
            <Link to='*'></Link>
        </nav>
    )
}

export default Navbar