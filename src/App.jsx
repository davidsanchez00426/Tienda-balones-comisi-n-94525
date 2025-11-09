import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
   <CartProvider>
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por categoría" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
   </CartProvider>
  )
}

export default App
