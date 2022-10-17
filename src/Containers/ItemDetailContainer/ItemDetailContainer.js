
import React, { useEffect, useState } from 'react';
import products from "../../data/productosData";
import ItemDetail  from "../ItemDetail/ItemDetail";
import PacmanLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const {id} = useParams()

  const [item, setItem] = useState()

  const getProduct = () => new Promise((resolve, reject) => {
      setTimeout(()=> resolve(products.find(product => product.id === Number(id))), 2000)
    })


  useEffect(() => {
    getProduct()
    .then(response => setItem(response))
  }, [])
  

  
  return (
    <>
    {
      item ? <ItemDetail item={item}/> : <PacmanLoader className="loader" color="#225dff" size={100} />
    }
  </>
)
}
export default ItemDetailContainer; 