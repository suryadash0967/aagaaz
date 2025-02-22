import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import CanvaEmbed from './components/CanvaEmbed'

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <Navbar/>
      <CanvaEmbed/>
      <div style={{color: "#fff"}}>
        Hello
      </div>
    </>
  )
}

export default App
