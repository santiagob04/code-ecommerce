import React from 'react';
import productsData from '../products.json'
import { Link } from 'react-router-dom';

function ItemListContainer() {
  // Utiliza los datos del archivo JSON
  const products = productsData;

  return (
    <div>
      <h1>Listado de productos</h1>
      {products.map(product => (
        <div key={product.id}>
          <p>id: {product.id}</p>
          <h2>Nombre: {product.name}</h2>
          <p>Precio: {product.price}</p>
          <p>Categoria: {product.category}</p>
          <Link to={`/item/${product.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;
