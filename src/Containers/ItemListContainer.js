import React, { useEffect, useState } from "react";
import './ItemListContainer.css'

const productos = [
  {title:"Aragorn", id:0, category:"The lord of the rings", description:"Funko-Pop Original de Aragorn" ,stock:5, price:7000,},
  {title:"Frodo", id:1, category:"The lord of the rings", description:"Funko-Pop Original de Frodo" ,stock:10, price:8000},
  {title:"Owen", id:2, category:"Jurassic world", description:"Funko-Pop Original de Owen" ,stock:10, price:7000},
  {title:"Gigantosaurus", id:3, category:"Jurassic world", description:"Funko-Pop Original del Gigantosaurus" ,stock:2, price:12000},
];

const obtenerProductos = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve(productos);
  }, 2000);
})

export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos
    .then((data)=>{
      setProductos(data);
    })
    .catch((error)=>{
      console.log("salio todo mal");
      console.log(error);
    })
  }, [])
  

  return (
    <>
      <h3>{greeting}</h3>
      {
        productos.map((producto)=>
          <p key={producto.id}>{producto.title}</p>
        )
      }
    </>
  );
};

