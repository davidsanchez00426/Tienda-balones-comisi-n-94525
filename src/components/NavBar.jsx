import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#333' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>
        Balones Coleccionables
      </Link>
      
      <div style={{ position: 'relative' }}>
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          style={{ 
            color: 'white', 
            backgroundColor: '#555', 
            border: 'none', 
            padding: '10px 20px', 
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px'
          }}
        >
          Categorías ▼
        </button>
        
        {showDropdown && (
          <div style={{ 
            position: 'absolute', 
            top: '100%', 
            right: 0,
            backgroundColor: '#222', 
            marginTop: '5px',
            minWidth: '150px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            borderRadius: '5px',
            zIndex: 1000
          }}>
            <Link 
              to="/" 
              onClick={() => setShowDropdown(false)}
              style={{ 
                display: 'block',
                color: 'white', 
                textDecoration: 'none', 
                padding: '10px 20px',
                borderBottom: '1px solid #444'
              }}
            >
              Todos
            </Link>
            <Link 
              to="/category/1" 
              onClick={() => setShowDropdown(false)}
              style={{ 
                display: 'block',
                color: 'white', 
                textDecoration: 'none', 
                padding: '10px 20px',
                borderBottom: '1px solid #444'
              }}
            >
              Tamaño 1
            </Link>
            <Link 
              to="/category/2" 
              onClick={() => setShowDropdown(false)}
              style={{ 
                display: 'block',
                color: 'white', 
                textDecoration: 'none', 
                padding: '10px 20px',
                borderBottom: '1px solid #444'
              }}
            >
              Tamaño 2
            </Link>
            <Link 
              to="/category/5" 
              onClick={() => setShowDropdown(false)}
              style={{ 
                display: 'block',
                color: 'white', 
                textDecoration: 'none', 
                padding: '10px 20px'
              }}
            >
              Tamaño 5
            </Link>
          </div>
        )}
      </div>
      
      <CartWidget />
    </nav>
  )
}

export default NavBar
