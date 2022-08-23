import React from 'react'
import Pizza from './Pizza.js'

export class Aplicacion extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            mounted: "recibiendo pedido",
            mostrarPedido : true
        }
        
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({mounted: "pizza"})
        },2000)
        console.log("componente inicializado")
    }

    componentDidUpdate(){
        console.log("componente actualizado")
    }

    componentWillUnmount(){
        console.log("componente desmontado")
    }

    render(){
        return (
            <div>
                {this.state.mostrarPedido ? <Pizza pedido = {this.state.mounted}/> : <h1>Tu pedido: </h1>}
                <button onClick={() => this.setState({ mostrarPedido: false })} >cancelar Pedido</button>
            </div>
        )
    }
}