import { useState } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  )
}

export default App
