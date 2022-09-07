import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './pokedex.css'


const TypeView = () => {
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/type/${params.pokeType}`

    const [pokeType, setPokeType] = useState({name:"", names:[{language:"", name:""}]})

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log(res.data)
            setPokeType(res.data)
        })
    }, [url])

    return (
        <div className="select-poke">
            <h2>{params.pokeType}</h2>
            <h3>{pokeType.name}</h3>
            <ul>
                {pokeType.names.map((item, index) => <li key={index}>{item.name}</li>)}
            </ul>
        </div>
    )
}

export default TypeView;