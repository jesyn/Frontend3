//import React from 'react';
const app = document.getElementById("root");

const Prueba = () => {
    const titulo= React.createElement("h1", null , "Bob Esponja");
    const p = React.createElement("p", null , "Patricio Star");
    return React.createElement("div", null, [titulo,p]);
}

ReactDOM.render(React.createElement(Prueba),app);
//export default Prueba;