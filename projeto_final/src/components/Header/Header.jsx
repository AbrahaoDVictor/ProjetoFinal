import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa'
import { FaGauge, FaGaugeHigh } from 'react-icons/fa6'
import { useAuth } from '../../hooks/useAuth'
import style from './Header.module.css'

export const Header = () => {

  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState((localStorage.getItem('theme') === 'dark'))

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

  }, [darkMode])

  function handleLogout() {
    logout()
    navigate('/login')
  }
  return (
    <header className={style.header}>
      <strong className={style.brand}>
        <FaGauge size={20} />
        MyApp 
      </strong>
      <nav className={style.nav}>
        <NavLink to="/home" className={({ isActive }) => isActive ? style.active : ''}>Home</NavLink>
        <NavLink to="/motos" className={({ isActive }) => isActive ? style.active : ''}>Motos</NavLink>
        <NavLink to="/veiculos" className={({ isActive }) => isActive ? style.active : ''}>Veículos</NavLink>
      </nav>  
        <div className={style.actions}>
          {user  && (
            <div className={style.user}>
              <FaUserCircle size={20} />
              <span>{user.name}</span>
        </div>
          )}
          <button className={style.themeToggle} onClick={() => setDarkMode((prev) => !prev)} aria-label={darkMode ? 'Light Mode' : 'Dark Mode'}>
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <button className={style.logout} onClick={handleLogout}>
            Logout
          </button>
        </div>  
    </header>
  )
}
