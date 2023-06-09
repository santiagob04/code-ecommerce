import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer(props) {

  const { id } = useParams();

  return (
    <div>
      <h1>Detalle de producto</h1>
      
    </div>
  );
}

export default ItemDetailContainer;
