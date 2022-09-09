import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './pokedex.css'


const TypeView = () => {
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/type/${params.number}`
    console.log(params)
    
    const [pokeType, setPokeType] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data.pokemon)
                setPokeType(res.data.pokemon)
        })
    }, [url])

    return (
        <div className="select-poke">
            <ul>
                {pokeType.map((poke, index) => <li key={index}>{poke.pokemon.name}</li>)}
            </ul>
        </div>
    )
}

export default TypeView;