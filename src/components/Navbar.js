import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <span className="navbar-brand">
                        <i className="fab fa-github px-2"></i> Github Finder
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/search">Search</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
