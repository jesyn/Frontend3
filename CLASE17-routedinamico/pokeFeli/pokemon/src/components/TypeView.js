import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './pokedex.css'

const TypeView = () => {
    const params = useParams()
    const { pokeType } = params;
    const url = `https://pokeapi.co/api/v2/type/${pokeType}`;


    const [pokeTypeData, setPokeTypeData] = useState({ name: "", names: [{ language: '', name: '' }] })

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setPokeTypeData(res.data)
            })
    }, [url])

    return (
        <div className="select-poke">
            <h2>{params.pokeType}</h2>
            <h3>{pokeTypeData.name}</h3>
            <h3>Nombre en diferentes idiomas:</h3>
            <ul>
                {pokeTypeData.names.map(item => <li key={item.name}>{item.name}</li>)}
            </ul>
        </div>
    )
}

export default TypeView;