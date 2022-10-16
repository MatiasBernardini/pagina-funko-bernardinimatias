import React from 'react';
import Item from '../Item/Item';

export const ItemList = ({productList}) => {

  return (
    <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'space-evenly', margin:'30px'}}>
      {
        productList.map(item => <Item key={item.id} item={item} />)
      }
    </div>
  )
}
export default ItemList;