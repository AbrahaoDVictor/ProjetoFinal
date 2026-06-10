import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Veiculos from './pages/Veiculos'
import Motos from './pages/Motos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route element={<App />}>
          <Route path='/home' element={<Home />} />
          <Route path='/veiculos' element={<Veiculos />} />
          <Route path='/motos' element={<Motos />} />
          </Route>

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
