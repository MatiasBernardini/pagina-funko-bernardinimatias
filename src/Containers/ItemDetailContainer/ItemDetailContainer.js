
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import {db} from "../../firebase/firebase";
import ItemDetail  from "../ItemDetail/ItemDetail";
import PacmanLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const {id} = useParams()

  const [item, setItem] = useState()

  const [load, setLoad] = useState(true)

  const getSelected = async(idItem) => {
    try {
      const document = doc (db, "products", idItem)
      const response = await getDoc (document)
      const result = {id: response.id, ...response.data()}
      setItem (result)
      setLoad (false)

    } catch (error) {
      console.log (error)
    }
  }

  useEffect (() => {
    getSelected (id)
  }, [id])

  return (
    <>
      {load ? <PacmanLoader className="loader" color="#225dff" size={100} /> : <ItemDetail  item={item} /> }
  </>
)
}
export default ItemDetailContainer; 