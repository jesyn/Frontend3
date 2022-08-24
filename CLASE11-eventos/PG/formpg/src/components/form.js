import React, { Component } from "react";
//import Style from "form.module.css"
import Swal from "sweetalert2";

export class Rejuvenecedor extends Component {
    state = { name: "", edad: 0, error: "" };

    handleChange = (event) => {
        this.setState({
            name: event.target.value,
            edad: event.target.value,
            error: "",
        });
        console.log("Has cambiado el nombre o edad");
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.name === 0){ 
            Swal.fire("this field is required and it must have at least 2 caracters");
        }
        else {
            Swal.fire("Hello " + this.state.name + " your new age is " + this.state.edad);
            this.setState({ name: "" });
            this.setState({ edad: "" });
        }
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                />
            <label>Edad</label>
            <input
                type="number"
                value={this.state.edad}
                onChange={this.handleChange}
                />
            <span>{this.state.error}</span>
            <button type="submit">Submit!</button>
        </form>
        );
        
    }
}
