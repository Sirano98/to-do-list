import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

export const Header = () => {
    return (
        <header className="header navbar navbar-dark bg-primary">
            <h1 className="navbar-brand">
                <NavLink className="navbar-brand" to="/">To Do App</NavLink>
            </h1>
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Notes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/filter">Search</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}