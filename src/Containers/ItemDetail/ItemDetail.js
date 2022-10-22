import React, { useState, useContext }  from "react";
import Count from "../../Componentes/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './ItemDetail.css';

const ItemDetail = ({item}) => {
  const [isPressedButton, setIsPressedButton ] = useState (true);

  const onAdd = (count) => {
    console.log ("Se agregaron " + count + "  productos al carrito");
    setIsPressedButton (false)
  }

  return (
    <article>
          <div className="card-detail">
            <h2>{item.title}</h2>
            <div className="card-detail-left">
                <img src={item.image} alt={item.title} className="imagenDetail" />
            </div>
            <div className="card-detail-right">
                <p>{item.description}</p>
                <p className="price">${item.price}</p>
                <p>Stock: {item.stock}</p>
                { isPressedButton ? (
                  <Count stock={item.stock} initial={1} onAdd={onAdd} />
                ) : (
                  <Link to="/Cart">
                    <button className="buttonFinalizarCompra"> Finalizar Compra </button>
                  </Link>
                ) 
                }
            </div>
        </div>
    </article>
  )
}

export default ItemDetail;
