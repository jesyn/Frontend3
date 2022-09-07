import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './pokedex.css'

const TypeView = () => {
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/type/`
    console.log("url de cada tipo"+ url)
    

    const [pokeType, setPokeType] = useState({name:""})

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log(res.data)
            setPokeType(res.data.name)
        })
    }, [url])

    return (
        <div className="select-poke">
            <h2>{params.pokeType}</h2>
            <h3>{pokeType.name}</h3>
        </div>
    )
}

export default TypeView;