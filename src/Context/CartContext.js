import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setQty(cart.reduce((total, item) => total + item.cantidad, 0))
    setTotal(cart.reduce((total, item) => total + (item.cantidad * item.price), 0))
  }, [])
  

  const addItem = (item, cantidad) => {
    if (IsInCart(item.id)) {
      const modificado = cart.map((producto) => {
        if (producto.id === item.id) {
          producto.cantidad += cantidad;
        }
        return producto;
      });
      setCart(modificado);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
    setQty(qty + cantidad);
    setTotal(total + (item.price * cantidad));
  };

  const deleteItem = (id) => {
    const found = cart.find(producto => producto.id === id);
    setCart(cart.filter((item) => item.id !== id));
    setQty( qty - found.cantidad)
    setTotal(total - (found.price * found.cantidad))
  };

  const IsInCart = (id) => {
    return cart.find ((item) => item.id === id )
  }

  const getTotal = () => {
    let total = 0;
    cart.forEach ( (item) => {
      total = total + (item.price * item.cantidad)
    })
    return total; 
  }

  const clear = () => {
    setCart([]);
    setQty(0);
    setTotal(0);
  };

  return (
    <Context.Provider value={{ cart, qty, total, addItem, deleteItem, getTotal ,clear }}>
      {children}
    </Context.Provider>
  );
};