import React, { useState, useEffect } from 'react'
import './style.css'

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.body.className = dark ? 'dark' : ''
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button className="toggle-btn" onClick={() => setDark(!dark)}>
      {dark ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle
