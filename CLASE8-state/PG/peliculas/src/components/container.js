import React from "react";
import './container.css'


export default class Container extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="container">
                <h1>PELICULAS</h1>
            </div>
        )
    }
}