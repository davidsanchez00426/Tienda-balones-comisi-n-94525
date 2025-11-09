import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity) => {
    setCart([...cart, { ...product, quantity }])
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  )
}


