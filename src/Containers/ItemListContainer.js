import React from "react";
import './ItemListContainer.css'

export const ItemListContainer = ({ greeting, mansaje }) => {
  return (
    <>
      <p>{greeting}</p>
      <p>{mansaje}</p>
    </>
  );
};

