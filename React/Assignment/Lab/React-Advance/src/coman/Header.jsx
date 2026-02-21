import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
            <div className="container">

                {/* Brand Left */}
                <NavLink className="navbar-brand fw-bold fs-4" to="/">
                    React Advanced
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links Right */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" style={{ fontWeight: "bold", color: "white" }}>
                              Home
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style={{ fontWeight: "bold", color: "white" }}>
                                Hooks
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end shadow">
                                <li><NavLink className="dropdown-item" to="/">Task 1</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/task2">Task 2</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/task3">Task 3</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/task4">Task 4</NavLink></li>
                            </ul>
                        </li>

                        

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Header;