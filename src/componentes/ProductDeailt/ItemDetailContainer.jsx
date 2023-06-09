import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../products.json'

function ItemDetailContainer(props) {
  const products = productsData;

  const { id } = useParams();

  return (
    <div>
      <h1>Detalle de producto</h1>
      {products.map(product => (
        <div key={product.id}>
          <p>id: {product.id}</p>
          <h2>Nombre: {product.name}</h2>
          <p>Descripcion: {product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemDetailContainer;
