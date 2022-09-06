import React from "react";
import axios from "axios";

class Axios extends React.Component {
    componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => response.json())
    .then((data) => console.log("Datos obtenidos por fetch", data));
    axios
    .get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => console.log("Datos obtenidos por axios", res));
    }
    render() {


    return <div />;
    }
}

export default Axios;