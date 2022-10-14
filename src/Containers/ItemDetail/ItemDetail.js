import React from "react";
import Count from "../../componentes/ItemCount/ItemCount"
import './ItemDetail.css'

export const ItemDetail = ({item}) => {

    const onAdd = (quantity) => {
        console.loog(quantity)
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
                <Count stock={item.stock} initial={0} onAdd={onAdd}/>
            </div>
        </div>
    </article>
  )
}

export default ItemDetail;