import React from "react"
import logo from '../../assets/logo funko.png'
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'
import './Navbar.css'

const Header = () => {
    return(
       <header className="header">
        <Link to='/'><img className="imgNavbar" src={logo} alt="logoPagina" /></Link>
        <h2 className="titleNavbar">FunkoArg</h2>
        <nav>
            <Link to='/categoria/thelordOfTheRings'> The lord of the rings </Link>
            <Link to='/categoria/jurassicWorld'> Jurassic World </Link>
            <Link to='/categoria/theMandalorian'> The Mandalorian </Link>
        </nav>

        <CartWidget />
       </header>
    )
}

export default Header 