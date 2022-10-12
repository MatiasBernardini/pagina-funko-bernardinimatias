import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ list }) => {
  return (
    <ul>
      {list.map((productos) => (
        <Item productos={productos} key={productos.id} />
      ))}
    </ul>
  );
};

export default ItemList;