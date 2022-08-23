import React, { PureComponent } from 'react'


export default class pizza extends PureComponent {
    

    componentWillUnmount(){
        alert("Tu pedido ha sido cancelado.");  
        console.log("componente desmontado")
    }


    render() {
        return (
            <h2> Tu pedido: {this.props.pedido}</h2>
        )
    }
}
