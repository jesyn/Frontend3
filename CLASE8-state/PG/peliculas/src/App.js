
import React, { Component } from 'react'
import './App.css';
import Container from "./components/container"
import Plantilla from "./components/Plantilla";

export default class App extends Component {
  constructor(props){
    super(props)
    
  }

  link(){
    return "https://www.imdb.com/";
  }

  
  render() {
    return (
      <div>
        <>
          <Container/> 
          <Plantilla/>
          <a href={this.link()} target="_blank" className="link" rel="noreferrer">info peliculas</a>
        </>
      </div>

    )
  }
}
