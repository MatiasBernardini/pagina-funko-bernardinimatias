import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
  const {title, image, price, id} = item
  return (
    <div className='card-container'>
        <h4>{title}</h4>
        <div>
            <img className='imagenItem' src={image} alt={`Imagen del producto ${title}`} />
        </div>
        <p className='price'>{price} $</p>
        <Link to={`/detalles/${id}`}>
          <button className='buttonDetail'>Ver mas detalles</button>
        </Link>
    </div>
  )
}

export default Item;