import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './pokedex.css'
import {useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Type = () => {
    const url = `https://pokeapi.co/api/v2/type/`
    const [pokeType, setPokeType] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setPokeType(res.data.results)
        })
    }, [url])

    return (
        <div>
            <ul className="select-poke">
            {pokeType.map((tipo) => (
                <li key={tipo.name}
                    onClick={() => {
                        const text = tipo.url
                        const number = text.replace('https://pokeapi.co/api/v2/type/', '').replace('/','')
                        console.log(number)
                        
                        navigate(number);
                    }}
                >
                    {tipo.name}
                </li>
            ))}
            </ul>
            <Outlet />
        </div>
    );
}

export default Type;