import React from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./CartWidget.css"

export const CartWidget = () => {
    return(
    <button className="cartNavbar"><AddShoppingCartIcon color="success" sx={{ fontSize: 40 }}/></button>
    )
}