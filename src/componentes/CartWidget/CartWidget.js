import React, { useContext } from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Context } from "../../Context/CartContext";
import "./CartWidget.css"

export const CartWidget = () => {
    const { qty } = useContext(Context);

    return(
    <>
        <button className="cartNavbar" >
            <AddShoppingCartIcon color="success" sx={{ fontSize: 40 }}/>
            <h4>{qty}</h4>
        </button>
    </>

    )
}