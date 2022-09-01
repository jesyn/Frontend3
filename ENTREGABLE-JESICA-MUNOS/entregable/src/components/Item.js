import { useState } from 'react';


export default function Item({comprar, nombre, descripcion, stock}) {
    const [cantidad, setCantidad] = useState(stock)
    
    const manejoStock = () => {
        setCantidad(cantidad -1)
        comprar()
        
    }

    return (
      <div className='producto'>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <h5> En stock : {cantidad > 0 ?  cantidad : <span> agotado </span>} </h5>
        <button disabled={cantidad <= 0} onClick={manejoStock}>{cantidad > 0 ? 'COMPRAR' : 'SIN STOCK'}</button>
      </div>
    )
}