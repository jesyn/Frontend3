import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/Navbar.css"

export default class Navbar extends Component {
    render() {
        const activeStyle = { color: 'red' };
        return (
            <div className="navbar">
                    <NavLink to="/" activestyle={activeStyle}>Home</NavLink>
                    <NavLink to="/pokemon/search" activestyle={activeStyle}>Poke Search</NavLink>
            </div>
        )
    }
}