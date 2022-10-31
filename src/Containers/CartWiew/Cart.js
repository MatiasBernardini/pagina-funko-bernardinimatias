import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"

export const Cart = ({}) => {
  const { cart } = useContext(Context);
  return (
    <>
      {cart.length === 0 ? (
        <>
          <div className="divMensajeCarritoVacio">
            <h3 className="mensajeCarritoVacio">
              No Hay Productos en su Carrito. Si quiere Comprar toque <Link className="linkHome" to="/">"AQUÍ"</Link>
            </h3>
          </div>
        </>
      ) : (
        <>
          {cart.map((Item) => (
            <div className="divCarritoConProductos">
              <img className="imagenProductoCarrito" src={Item.image} alt="" />
              <p className="textosCarrito">{Item.title}</p>
              <p className="textosCarrito">Precio: {Item.price}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};