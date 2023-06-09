import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx'
import ItemListContainer from '../Catalog/ItemListContainer';

function NavBar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg">
            <div className="container-fluid">
                <a className="logo" href="index.html">
                    <h1>Code Solutions</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-list">
                        <li>
                            <CartWidget />
                        </li>
                        <li>
                            <a href="./pages/service.html">Productos</a>
                        </li>
                        <li>
                            <a href="./pages/abouts-us.html">Sobre nosotros</a>
                        </li>
                        <li>
                            <a href="./#contacto">Contacto</a>
                        </li>
                        <li>
                            <a href="./pages/enter.html">Ingresar</a>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar