import {useEffect, useState} from 'react'


const FetchComponent = () => {
    const [imagen, setImagen] = useState('')
    const [cambio, setCambio] = useState(false)
    const [numero, setNumero] = useState(1)

    useEffect (() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.sprites.front_default)
                if(cambio){
                    setImagen(data.sprites.front_default)
                }else{
                setImagen(data.sprites.back_default)
                }
            })
            .catch((error) => {
                console.log("error")
                })
    },[cambio, numero])

    return(
        <>
            <h1>Pokemon</h1>
            <label>ingresar un numero</label>
            <input value={numero} onChange={(event) => setNumero(event.target.value)} />
            <br></br>
            <img src={imagen} alt="imagen pokemon" />
            <br></br>
            <button onClick={() => setCambio(!cambio)}>cambiar perfil</button>
        </>
        )
}

export default FetchComponent;
