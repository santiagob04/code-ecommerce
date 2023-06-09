import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx'
import ItemListContainer from '../Catalog/ItemListContainer';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg">
            <div className="container-fluid">
                <a className="logo" href="index.html">
                    <h1>InfoTech</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-list">
                        <li>
                        <Link to='/' >Inicio</Link>
                        </li>
                        <li>
                            <Link to='productos'>Productos</Link>
                        </li>
                        <li>
                            <Link to='category'>Shop</Link>
                        </li>
                        <li>
                            <Link to='AboutUs'>Sobre Nosotros</Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar