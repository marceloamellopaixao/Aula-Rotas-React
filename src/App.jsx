// import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Outlet />
      <Rodape />
    </>
  )
}
