import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Cart from './components/Cart.jsx'
import Footer from './components/Footer.jsx'
import ItemCard from './components/ItemCard.jsx'

import { CATEGORIES } from './assets/parts.js'
import { PARTS } from './assets/parts.js'

function App() {
  const [category, setCategory] = useState(CATEGORIES[0])
  const [selectedItems, setSelectedItems] = useState(() => 
    Object.fromEntries(CATEGORIES.map(c => [c, null]))
  )

  const handleRemoveSelectedItem = (category) => {
    setSelectedItems({...selectedItems, [category]: null})
  }

  return (
    <div className="app">
      <Header />

      <main className="layout">
        <section className="parts">
          <div className="filters">
            <div className="category-buttons">
              {CATEGORIES.map((name) => <button className="category-btn" onClick={() => setCategory(name)}>{name}</button>)}
            </div>
          </div>

          <div className="items">
            {PARTS[category].map((item) => 
              <ItemCard name={item.name} onAddClick={() => setSelectedItems({...selectedItems, [category]: item})} />
            )}
          </div>

          <p>2 columns: left one has multiple tabs for each part of the PC, right one is the "cart" with currently selected parts, some stats like wattage and compatibility issues, and total price.</p>
        </section>

        <Cart selectedItems={selectedItems} handleRemove={handleRemoveSelectedItem} />
      </main>

      <Footer />
    </div>
  )
}

export default App
