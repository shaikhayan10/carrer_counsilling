import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRouter from './components/router/Router'
import axios from 'axios'



function App() {
  const [count, setCount] = useState(0)
  axios.defaults.baseURL="http://localhost:3001"
  return (
    <div>
      <MainRouter></MainRouter>
    </div>
  )
}

export default App
