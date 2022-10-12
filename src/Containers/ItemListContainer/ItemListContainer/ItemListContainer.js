import React, { useEffect, useState, } from "react";
import productosData from '../../../data/productosData';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
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