import React from "react";
import './ItemListContainer.css'
import ItemCount from '../componentes/ItemCount/ItemCount'

export const ItemListContainer = ({ greeting, mansaje }) => {
  const onAdd = (count) => {
    console.log(`El usuaro quiere agregar ${count} productos`);
  };

  return (
    <>
      <p>{greeting}</p>
      <p>{mansaje}</p>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </>
  );
};

