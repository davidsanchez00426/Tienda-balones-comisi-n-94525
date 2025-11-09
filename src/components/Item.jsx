import React from 'react'
import { Link } from 'react-router-dom'

function Item({ id, name, price, img, stock }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', textAlign: 'center' }}>
      <img src={img} alt={name} style={{ width: '100%', height: '200px' }} />
      <h3>{name}</h3>
      <p style={{ fontSize: '20px', color: 'green' }}>${price}</p>
      <p>Stock: {stock}</p>
      <Link to={`/item/${id}`}>
        <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          Ver Detalle
        </button>
      </Link>
    </div>
  )
}

export default Item

