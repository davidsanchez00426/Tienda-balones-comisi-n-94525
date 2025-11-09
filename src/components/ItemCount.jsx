import React, { useState } from 'react'

function ItemCount({ stock, onAdd }) {
  const [quantity, setQuantity] = useState(1)

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const handleAdd = () => {
    onAdd(quantity)
  }

  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleDecrease} style={{ padding: '5px 15px', fontSize: '18px' }}>-</button>
        <span style={{ margin: '0 20px', fontSize: '20px' }}>{quantity}</span>
        <button onClick={handleIncrease} style={{ padding: '5px 15px', fontSize: '18px' }}>+</button>
      </div>
      
      <button 
        onClick={handleAdd} 
        style={{ 
          marginTop: '20px', 
          padding: '10px 30px', 
          backgroundColor: 'green', 
          color: 'white', 
          border: 'none', 
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  )
}

export default ItemCount


