import React from 'react'
import data from "./data.json";
import Item from './Item';


export default function Listado({comprarItem}) {

  return (
    <div className='container'>
      {data.map(item => <Item 
                        key={item.id} 
                        comprar={comprarItem} 
                        nombre={item.producto.nombre} 
                        descripcion={item.producto.descripcion} 
                        stock={item.stock}
                        />
                )
      }
    </div>
  )
}