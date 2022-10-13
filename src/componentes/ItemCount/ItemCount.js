import React, {useState} from "react";
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState (1);

    const subtract = () => {
        if (count > 1){
            setCount (count - 1);
        }
    };

    const add = () => {
        if (count < stock){
            setCount (count + 1);
        }

    };

    return(
        <div className='counter-container'>
            <h3 className='counter'>{count}</h3>
            <div>
                <button className='button' onClick={subtract}>-</button>
                <button className='button' onClick={add}>+</button>
            </div>
            <button className='button button-buy'>Añadir al Carrito</button>
        </div>
    );
};

export default ItemCount 

/* <p>{mansaje}</p>
<ItemCount stock={10} initial={1} onAdd={onAdd}/> */