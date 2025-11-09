import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductById } from '../utils/promises'

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    getProductById(itemId).then(data => {
      setProduct(data)
      setLoading(false)
    })
  }, [itemId])

  return (
    <div>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Cargando producto...</p>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  )
}

export default ItemDetailContainer

