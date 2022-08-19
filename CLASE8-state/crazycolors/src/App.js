import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: ["RED 0","BLUE 1","YELLOW 2", "GREEN 3","ORANGE 4","MAGENTA 5","BROWN 6","LIME 7"]
    }
    this.Shuffle = this.Shuffle.bind(this)
  }

  Shuffle(){
    let shuffled = this.state.colors.sort(() => Math.random()- 0.5); 
    this.setState({colors: shuffled})
    console.log(shuffled)
  
  }

  
  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.state.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.Shuffle} />
      </div>

    )
  }
}