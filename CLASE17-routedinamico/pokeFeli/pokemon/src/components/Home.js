import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import './pokedex.css'


const Home = () => {

    return (
        <>
            <h1>POKEMONES</h1>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Home