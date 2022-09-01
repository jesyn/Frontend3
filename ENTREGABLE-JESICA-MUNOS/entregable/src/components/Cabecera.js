import React from 'react'


export default function Cabecera({itemComprado}) {
  
  return (
    <header>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos: <span>{itemComprado}</span></p>
    </header>
  )
}