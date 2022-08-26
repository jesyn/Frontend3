import styles from './contador.module.css'
import Swal from "sweetalert2"
import React, { useState } from "react";

function ContadorF() {
    const[contador, setContador] = useState(0);
    const[gato, setGato ] = useState("gatos");
    const[imagen, setImagen] = useState("");

    const manejoContador = (e) => {
        let contardorNuevo = parseInt(e.target.value)
        setContador(contardorNuevo)
        console.log(contador)
        if(contardorNuevo === 10){
            
            Swal.fire({
                title: 'wow 10 gatitos!',
                text: 'Llegaste al máximo de gatitos',
                imageUrl: 'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=400,height=200,fit=cover/article/main-picture/5d7fa25d1e1f8456682099.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'gato sorprendido',
            })
        }else if(contardorNuevo < 0){
            Swal.fire({
                title: 'Menos gatitos?',
                text: 'No se pueden restar más gatitos',
                imageUrl: '../img/gatos-mimoso.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'gato mimoso',
            })
        }

        if(contardorNuevo === 1){
            setGato("gato")
        }else{
            setGato("gatos")
        }
    }
    
    const mostraImagen = (e) => {
        e.preventDefault()
        setImagen("https://cdn.pixabay.com/photo/2021/05/27/10/50/cat-6287784_960_720.png" )
    
    }

    return (
        <form>
            <div className={styles.container}>
                <label className={styles.title}>CONTADOR DE GATITOS</label>
                <input
                    type="number"
                    value={contador}
                    min="0"
                    max="10"
                    onChange={manejoContador}>
                </input>
                <h2>{gato}</h2>
                <button className={styles.button} onClick={mostraImagen}>Mostrar Gato contador</button>
                {imagen && <img className={styles.img} src={imagen} alt="gato contable"/>}
            </div>
        </form>
    )
}

export default ContadorF