import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/component/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{backgroundColor:"black",color:"White"}}>
    <Navbar/>
    </div>
    </>
  )
}

export default App
