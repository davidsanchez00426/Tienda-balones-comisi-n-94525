import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'

function ItemDetail({ product }) {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <img src={product.img} alt={product.name} style={{ width: '100%', maxWidth: '400px' }} />
      <h2>{product.name}</h2>
      <p style={{ fontSize: '24px', color: 'green' }}>${product.price}</p>
      <p>{product.description}</p>
      <p>Tamaño: {product.size}</p>
      <p>Stock: {product.stock}</p>
      
      <ItemCount stock={product.stock} onAdd={handleAddToCart} />
    </div>
  )
}

export default ItemDetail

