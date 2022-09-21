import React from 'react';

class Clase extends React.Component{
    constructor(props){
        super()
        this.state= {
            title: "clase",
            comment: "primer texto "
        }
    }

    componentDidMount(){
        this.setState({coment: "segundo texto c"})
    }
    
    
    
    render(){
        return (
            <div>
                <p>{this.state.title}</p>
                <p>{this.state.comment}</p>
            </div>
        )
    }
}

export default Clase;