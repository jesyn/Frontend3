import Swal from "sweetalert2";
import { useState } from "react";

import React from 'react'

function Form() {
    const [name, setName] = useState('')
    const [edad, setEdad] = useState(0)


const handleSubmit = (event) => {
    event.preventDefault()
    if(name === "" ){
        Swal.fire("el campo nombre debe ser completado")
    }
    else if(edad <= 0){
        Swal.fire("la edad debe ser un numero positivo")
    }
    else{
        const edadNueva = edad -10
        Swal.fire("Hola " + name + " tu edad es " + edadNueva)
        setName('')
        setEdad(0)
    }
}


const handleChange2 = (e) => {
    setEdad(e.target.value)
}

    return (
    <div>Formulario
        <form onSubmit={handleSubmit}>
            <label>Ingrese su nombre</label>
            <input 
                type="text"
                value={name}
                onChange={(e) =>{
                    setName (e.target.value)
                }}>
                </input>
            <label>Ingrese su edad</label>
            <input 
                type="number"
                value={edad}
                onChange={handleChange2}>
            </input>
            <button type="submit">aceptar</button>
        </form>
    </div>
)
}

export default Form