import React from "react";
import Perrito from "./Perrito.js";

const dogs = [
  {
    name: "peluza",
    age: 1,
    race: "ovejero",
    sex: "male",
    size: "small",
  },
  {
    name: "Ibiza",
    age: 2,
    race: "pepe",
    sex: "female",
    size: "medium",
  },
  {
    name: "teresa",
    age: 17,
    race: "siamesa",
    sex: "female",
    size: "medium",
  },
  {
    name: "nala",
    age: 7,
    race: "mestiza",
    sex: "female",
    size: "medium",
  },
];

const imgPerro = "https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg";



const Vet = () => {
  return (
    <div>
      <h2 className="titulo">CLIENTES CANINOS VETERINARIA</h2>
      <img src={imgPerro} className="img" alt="foto perro labrador"></img>
      {dogs.map((perrito) => (
        <Perrito
          name={perrito.name}
          key={perrito.name}
          age={perrito.age}
          race={perrito.race}
          sex={perrito.sex}
          size={perrito.size}
        />
      ))}
    </div>
  );
};

export default Vet;
