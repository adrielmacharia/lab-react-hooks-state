import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className={`app ${isDarkMode ? 'app--dark' : ''}`}>
      <header className="app__header">
        <div>
          <p className="app__eyebrow">Fresh picks, easy shopping</p>
          <h1>🛒 Shopping App</h1>
          <p className="app__intro">
            Find your everyday favorites and add them to your cart.
          </p>
        </div>
        <DarkModeToggle
          isDarkMode={isDarkMode}
          onToggle={() => setIsDarkMode((darkMode) => !darkMode)}
        />
      </header>

      <main className="app__layout">
        <section className="app__products" aria-label="Products">
          <div className="app__section-heading">
            <div>
              <p className="app__eyebrow">Browse the selection</p>
              <h2>Available Products</h2>
            </div>
            <div className="app__filter">
              <label htmlFor="category-filter">Filter by Category</label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                <option value="all">All categories</option>
                <option value="Fruits">Fruits</option>
                <option value="Dairy">Dairy</option>
              </select>
            </div>
          </div>
          <ProductList
            selectedCategory={selectedCategory}
            onAddToCart={(product) =>
              setCartItems((items) => [...items, product])
            }
          />
        </section>

        <Cart items={cartItems} />
      </main>
    </div>
  )
}

export default App
