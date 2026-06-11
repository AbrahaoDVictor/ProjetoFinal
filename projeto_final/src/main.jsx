import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./contexts/AuthProvider"
import { AppRoutes } from "./routes/AppRoutes"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
