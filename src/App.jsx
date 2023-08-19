import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Rating } from '@mui/material'
import Newspaper from './components/Newspaper/Newspaper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Newspaper></Newspaper>
    </div>
  )
}

export default App
