import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const Cart = ({}) => {
  const { cart } = useContext(Context);
  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1>
            No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
          </h1>
          <h2>Gracias por tu visita</h2>
        </>
      ) : (
        <>
          {cart.map((producto) => (
            <h1 key={producto.id}>{producto.title}</h1>
          ))}
        </>
      )}
    </>
  );
};