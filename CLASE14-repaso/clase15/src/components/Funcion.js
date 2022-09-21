import React from 'react'
import {useState, useEffect} from 'react'

export default function Funcion() {
    const [state, setState]= useState()

    const submit = (e) => {
        e.preventDefault()
        setState(e.target.value)
        console.log(state)
    }

    return (
        <form onSubmit={submit}>
            <label>name</label>
            <input 
            type="text" 
            onChange={(e) =>{setState (e.target.value)}}
            value={state} />
            <button>submit</button>
        </form>
    )
}
