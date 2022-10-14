import React from 'react'
import './Item.css'

export const Item = ({item}) => {
  const {title, image, price, id} = item
  return (
    <div className='card-container'>
        <h4>{title}</h4>
        <div>
            <img className='imagenItem' src={image} alt={`Imagen del producto ${title}`} />
        </div>
        <p className='price'>{price} $</p>
        <button className='buttonDetail'>Ver Mas Detalles</button>
    </div>
  )
}

export default Item;