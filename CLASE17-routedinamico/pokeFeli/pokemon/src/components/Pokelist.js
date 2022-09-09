
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import pokedex from '../pokedex.json'
import Pokemon from './Pokemon'

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
            <Routes>
                <Route path=':pokeName' element={<Pokemon />} />
            </Routes>
        </>
    )
}

export default PokeList