import React from 'react';
export default function ProductCard({product, onAddToCart, onEdit, onDelete}){
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>
        <p className="mb-1"><strong>Precio:</strong> ${product.price}</p>
        <p className="mb-1"><small>Stock: {product.stock}</small></p>
        {product.onSale && <span className="badge bg-success mb-2">Oferta</span>}
        <div className="mt-auto">
          <button className="btn btn-primary btn-sm me-2" onClick={()=>onAddToCart && onAddToCart(product)}>Agregar</button>
          {onEdit && <button className="btn btn-outline-secondary btn-sm me-2" onClick={()=>onEdit(product)}>Editar</button>}
          {onDelete && <button className="btn btn-danger btn-sm" onClick={()=>onDelete(product.id)}>Eliminar</button>}
        </div>
      </div>
    </div>
  )
}