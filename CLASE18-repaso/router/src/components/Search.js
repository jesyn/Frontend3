import React, { Component } from 'react'
import "../styles/Search.css"
import items from "./items.json"

export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            inputValue : "", // El estado del input
        }
    }

    // Funcion que actualiza el estado del input
    handleChange = (event) => this.setState({inputValue: event.target.value});

    // ESPACIO DE TRABAJO (Usar withRouter en el archivo Navbar.jsx antes de trabajar aqui)
    handleSubmit = () =>  {
        if(this.state.inputValue) {
            // Filtramos nuestro arreglo de items y vemos si alguno incluye el inputValue
            const item = items.filter( product => product.name.includes(this.state.inputValue));
            // variable que utilizaremos para ir a la ruta del producto (/product/urlItem)
            const urlItem = item[0].name;
            console.log(`/product/${urlItem}`);
        }
        
        // Si no hay input, que la pagina te lleve a la Home 
        if(!this.state.inputValue) console.log("Llevame al inicio");
    };

    render() {
        const {inputValue} = this.state
        return (
            <div className="search__container">
                <input onChange={this.handleChange} type="text" value={inputValue} />
                <button onClick={this.handleSubmit}><img width="12px" src="/images/lupa.png" alt="lupa" /></button>
            </div>
        )
    }
}