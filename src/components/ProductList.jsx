import React from 'react';
import ProductCard from './ProductCard';
export default function ProductList({products, onAddToCart, onEdit, onDelete}){
  if(!products || products.length===0) return <p>No hay productos.</p>;
  return (
    <div className="row g-3">
      {products.map(p=>(
        <div className="col-12 col-sm-6 col-md-4" key={p.id}>
          <ProductCard product={p} onAddToCart={onAddToCart} onEdit={onEdit} onDelete={onDelete} />
        </div>
      ))}
    </div>
  )
}