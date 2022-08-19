import {peliculas} from "./peliculas";

const Plantilla = (props) => {

    return (
        <div className="pelis">
            {peliculas.map(peli => <div key={peli.nombre} >
                <p>NOMBRE: {peli.nombre}</p>
                <p>ANIO: {peli.anio}</p>
                <p>DIRECTOR: {peli.director}</p>
                <p>GENERO: {peli.genero}</p>

            </div>)}
        </div>
    )
}

export default Plantilla;