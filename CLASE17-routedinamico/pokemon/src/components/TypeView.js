import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './pokedex.css'


const TypeView = () => {
    const params = useParams()
    const url = `https://pokeapi.co/api/v2/type/${params.number}`
    const [pokeType, setPokeType] = useState([])
    const [type, setType] =useState([])

    useEffect(() => {
        axios.get(url)
            .then(res => {
                //console.log(res.data)
                setPokeType(res.data.pokemon)
                setType(res.data)
        })
    }, [url])


    return (
        <div >
            <h3> {" Lista de Pokemones de tipo " + type.name} </h3>
            <ul className="select-poke">
                {pokeType.map((poke, index) => <li key={index}>{poke.pokemon.name}</li>)}
            </ul>
        </div>
    )
}

export default TypeView;