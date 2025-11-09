import React from 'react'
import Item from './Item'

function ItemList({ products }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {products.map(product => (
        <Item 
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          stock={product.stock}
        />
      ))}
    </div>
  )
}

export default ItemList

