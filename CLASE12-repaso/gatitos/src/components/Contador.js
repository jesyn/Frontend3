import styles from './contador.module.css'
import React, { Component } from "react";
import Swal from "sweetalert2"

export default class Contador extends Component {
    constructor(){
        super()
        this.state = {
            contador: 0,
            gato: "gatos",
        }
    }

componentDidMount(){
    console.log("componente montado")
}

componentDidUpdate(){
    console.log("componete actualizado")
}

manejoGato = (contador) => {
    if(contador === 1){
        this.setState({gato: "gato"})
    }else{
        this.setState({gato: "gatos"})
    }
}

restarGatitos = (e) => {
    
    let contadorNuevo = this.state.contador - 1
    if(contadorNuevo > 0){
        this.setState({contador: contadorNuevo})
    
    }else{
        Swal.fire({
            title: 'Menos gatitos?',
            text: 'No se pueden restar más gatitos',
            imageUrl: '../img/gatos-mimoso.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }
    
    this.manejoGato(contadorNuevo)
}

sumarGatitos = () => {
    let contadorNuevo = this.state.contador + 1
    if(contadorNuevo <= 10){
        this.setState({contador: contadorNuevo})
        
    }
    if(contadorNuevo === 10){
        Swal.fire({
            title: 'wow 10 gatitos!',
            text: 'Llegaste al máximo de gatitos',
            imageUrl: 'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=400,height=200,fit=cover/article/main-picture/5d7fa25d1e1f8456682099.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'gato mimoso',
        })
    }

    this.manejoGato(contadorNuevo)
}

    render(){
        return (
            <div className={styles['container']}>
                <h1 className={styles['title']}>CONTADOR DE GATITOS</h1>
                <p>{this.state.contador}</p>
                <h2>{this.state.gato}</h2>
                <div className={styles['btn-view']}>
                    <button className={styles['btn']} onClick={this.restarGatitos}>restar</button>
                    <button className={styles['btn']} onClick={this.sumarGatitos}>sumar</button>
                </div>
                <img className={styles['img']} src="https://cdn.pixabay.com/photo/2021/05/27/10/50/cat-6287784_960_720.png" alt="gato contable"/>
            </div>
        )

    }
}