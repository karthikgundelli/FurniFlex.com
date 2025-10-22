import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ThemeToggle from './ThemeToggle'
import './style.css'

const Navbar = () => {
  const { cart } = useContext(CartContext)

  return (
    <nav className="navbar">
      <h2 className="logo">FurniFlex</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop</Link></li>
        <li><Link to="/cart">Cart ({cart.length})</Link></li>
      </ul>
      <ThemeToggle />
    </nav>
  )
}

export default Navbar
