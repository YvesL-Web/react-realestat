import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/images/logo_imo.jpg" className="logo" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/"><i className="fa-solid fa-house"></i> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="{% url 'listings:listings' %}">Estate</Link>
                        </li>


                        {/* {% if request.user.is_authenticated %} */}
                        <li className="nav-item dropdown ">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-user"></i>
                                {/* {{request.user.username}} */}
                            </Link>
                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <Link className="nav-link" to="{% url 'users:dashboard' %}"><i className="fa-solid fa-address-card"></i> Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="{% url 'users:logout' %}"><i className="fa-solid fa-right-from-bracket"></i> Logout</Link>
                                </li>
                            </ul>
                        </li>
                        {/* {% else %} */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/register/">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login/"><i className="fa-solid fa-right-to-bracket"></i> Login</Link>
                        </li>
                        {/* {% endif %} */}


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header