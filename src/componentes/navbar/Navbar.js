import React from "react"
import logo from '../../assets/logo funko.png'
import { CartWidget } from "../CartWidget/CartWidget";
import './Navbar.css'

const Header = () => {
    return(
       <header className="header">
        <img className="imgNavbar" src={logo} alt="logoPagina" />
        <h2 className="titleNavbar">FunkoArg</h2>
        <nav>
            <a href="">The lord of the rings</a>
            <a href="">Jurassic world</a>
            <a href="">The Mandalorian</a>
        </nav>

        <CartWidget />
       </header>
    )
}

export default Header 