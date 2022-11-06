import React, { useEffect, useState, } from "react";
import ItemList from '../ItemList/ItemList';
import PacmanLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import {db} from "../../../firebase/firebase";

export const ItemListContainer = () => {
  const [productList, setProductList] = useState([])

  const [load, setLoad] = useState(true)

  const {categoria} = useParams()

  const getData = async (category) => {
    try {
      setLoad (true)
      const document = category ?  query (collection (db, "products"), where ("category","==",category)) 
                                :collection (db, "products")
      const col = await getDocs (document)
      const result = col.docs.map ((doc) => doc = { id: doc.id, ...doc.data() } )
      setProductList (result)
      setLoad (false)
    } catch (error) {
      console.log (error)
    }
  }

  useEffect ( () => {
    getData(categoria)
  }, [categoria])

  return (
    <>
      {load ? <PacmanLoader className="loader" color="#225dff" size={100} /> : <ItemList productList={productList} /> }
    </>
  )
}

export default ItemListContainer;