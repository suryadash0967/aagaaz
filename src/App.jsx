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
      <div style={{color: "#fff", position: "relative", top: "-80px", backgroundColor: "#000",}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aliquid aspernatur. Molestias, nemo! Iste ipsam at earum nihil ipsum dicta et ratione quis provident doloremque dolor quos, consequatur reiciendis ipsa minima consequuntur vitae unde asperiores nemo, nam, totam suscipit excepturi debitis. Ad omnis dolor explicabo voluptates voluptatem nisi placeat maxime!
      </div>
    </>
  )
}

export default App
