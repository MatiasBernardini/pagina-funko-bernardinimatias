import React, { useEffect, useState, } from "react";
import productosData from '../../../data/productosData';
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = () => {
  const [productList, setProductList] = useState([])

  const getProducts = () => new Promise((resolve, reject) => {
    setTimeout(()=> resolve(productosData), 2000)
  })

  useEffect(() => {
    getProducts()
    .then(productosData => setProductList(productosData))
    .catch(error => console.error(error))
  }, [])  

  return (
    <ItemList productList={productList} />
  )
}

export default ItemListContainer;