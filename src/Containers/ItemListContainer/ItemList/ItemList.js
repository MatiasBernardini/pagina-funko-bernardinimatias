import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ list }) => {
  return (
    <div>
      {list.map((productos) => (
        <Item productos={productos} key={productos.id} />
      ))}
    </div>
  );
};

export default ItemList;