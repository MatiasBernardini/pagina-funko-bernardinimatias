import React, { useEffect, useState, } from "react";
import productosData from '../../../data/productosData';
import ItemList from '../ItemList/ItemList';
import PacmanLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
  const [productList, setProductList] = useState([])

  const {categoria} = useParams()

  const getProducts = () => new Promise((resolve, reject) => {
    if(categoria) {
      setTimeout(()=> resolve(productosData.filter(item => item.category === categoria)), 2000)
    } else {
      setTimeout(()=> resolve(productosData), 2000)
    }
  })

  useEffect(() => {
    getProducts()
    .then(productosData => setProductList(productosData))
    .catch(error => console.error(error))
    return () => {
      setProductList([])
    }
  }, [categoria])  

  return (
    <>
      {
        productList.length ? <ItemList productList={productList} /> : <PacmanLoader className="loader" color="#225dff" size={100} />
      }
      
    </>
  )
}

export default ItemListContainer;