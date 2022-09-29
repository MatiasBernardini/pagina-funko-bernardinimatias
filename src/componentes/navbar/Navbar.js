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
            <a href="">Categoria 1</a>
            <a href="">Categoria 2</a>
            <a href="">Categoria 3</a>
            <a href="">Categoria 4</a>
        </nav>

        <CartWidget />
       </header>
    )
}

export default Header 