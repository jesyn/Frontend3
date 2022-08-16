import React from 'react'


function Perrito (props) {
    return (
      <div>
          <h3>Nombre: {props.name}</h3>
          <ul>
              <li>edad: {props.age}</li>
              <li>raza: {props.race}</li>
              <li>sexo: {props.sex}</li>
              <li>tamaño: {props.size}</li>
          </ul>
          <br></br>
      </div>
    )
}

export default Perrito

