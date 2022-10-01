import React from "react"
import logo from '../../assets/logo funko.png'
import { CartWidget } from "../CartWidget/CartWidget";
import './Navbar.css'

const Header = () => {
    return(
       <header>
        <img src={logo} alt="logoPagina" />
        <h2>Funko Shop</h2>
        <nav>
            <a href="">Productos</a>
            <a href="">Registrate</a>
            <a href="">Conocenos</a>
        </nav>

        <CartWidget />
       </header>
    )
}

export default Header 