import React from 'react'

const Header = ({personaje}) => {
    return (
        <nav>
            <h1>Personaje Seleccionado</h1>
            <p>Nombre: {personaje.superhero}</p>
            <p>Alter ego: {personaje.alter_ego}</p>
        </nav>
    )
}

export default Header