import React from 'react'

const Cards = ({lista, setPersonaje}) => {

    return (
        <div>
            <h1> Lista de personajes</h1>
            <ul>
                {lista.map(personaje => <li style  = {{cursor : "pointer"}} key={personaje.superhero} onClick={() => setPersonaje(personaje)}>
                {personaje.superhero}
                </li>)}
            </ul>
            
        </div>
    )
}

export default Cards