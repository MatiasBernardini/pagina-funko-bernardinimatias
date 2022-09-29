import React from "react"
import './Navbar.css'
import logo from '../../assets/logo funko.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
        <AddShoppingCartIcon sx={{ fontSize: 40 }}/>

       </header>
    )
}

export default Header 