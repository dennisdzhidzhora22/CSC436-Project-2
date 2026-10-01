import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <main className="site-main">
        <p>2 columns: left one has multiple tabs for each part of the PC, right one is the "cart" with currently selected parts, some stats like wattage and compatibility issues, and total price.</p>

      </main>

      <Footer />
    </div>
  )
}

export default App
