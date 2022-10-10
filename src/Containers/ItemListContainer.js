import React, { useEffect, useState, } from "react";
import productosData from '../data/productosData';
import ItemList from '../Containers/ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const getProductosData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productosData);
      }, 2000);
    });

    getProductosData
      .then((response) => setProductos(response))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? <h2>Cargando...</h2> : <ItemList list={productos} />;
};

export default ItemListContainer;


// const obtenerProductos = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     resolve(productos);
//   }, 2000);
// })

// export const ItemListContainer = ({ greeting }) => {

//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     obtenerProductos
//     .then((data)=>{
//       setProductos(data);
//     })
//     .catch((error)=>{
//       console.log("salio todo mal");
//       console.log(error);
//     })
//   }, [])

//   return (
//     <>
//       <h3>{greeting}</h3>
//       {
//         productos.map((producto)=>
//           <p key={producto.id}>{producto.title}</p>
//         )
//       }
//     </>
//   );
// };