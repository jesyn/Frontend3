
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import pokedex from '../pokedex.json'

const PokeList = () => {

    return (
        <>
            <div className='select-poke'>
                {pokedex.map(poke => 
                <Link key={poke.id} to={`${poke.name}`}> 
                    <li>{poke.name}</li>
                </Link>  
                )}
            </div>
            <Outlet/>
        </>
    )
}

export default PokeList