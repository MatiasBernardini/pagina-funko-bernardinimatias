import React, {useState} from "react";

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
        <div>
            <button onClick={subtract}>-</button>
            <h3>{count}</h3>
            <button onClick={add}>+</button>
            <button disabled={stock === 0 } onClick={() =>onAdd (count)}>
                <h4> {stock === 0 ? "No hay Stock" : "Agregar al Carrito" } </h4>
            </button>
        </div>
    );
};

export default ItemCount 

/* <p>{mansaje}</p>
<ItemCount stock={10} initial={1} onAdd={onAdd}/> */