import React, { useContext } from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Context } from "../../Context/CartContext";
import { Link } from 'react-router-dom'
import "./CartWidget.css"

export const CartWidget = () => {
    const { cart, qty } = useContext(Context);

    return cart.length > 0 ? (
    <>
        <button className="cartNavbar" >
            <Link to='/cart'><AddShoppingCartIcon color="success" sx={{ fontSize: 40 }}/></Link>
            <h4>{qty}</h4>
        </button>
    </>

    ) : (
        <></>
    );
}