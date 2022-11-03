import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"

export const Cart = ({}) => {
  const { cart, deleteItem, getTotal } = useContext(Context);
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
            <div key={Item.id} className="divCarritoConProductos">
              <img className="imagenProductoCarrito" src={Item.image} alt="" />
              <p className="textosCarrito">"{Item.title}"</p>
              <p className="textosCarrito">Precio: ${Item.price}</p>
              <p className="textosCarrito">Cantidad:  {Item.cantidad}</p>

              <button className="buttonEliminarProducto" onClick={() => deleteItem (Item.id)}>
                Eliminar Producto
              </button>
            </div>
          ))}

          <div className="divFinalizarCompra">
            <h3>
                Precio Total: ${getTotal()}
            </h3>
            <button className="buttonConfirmarCompra">
              Confirmar Compra
            </button>
          </div>
        </>
        
      )}
    </>
  );
};