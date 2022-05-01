import React from 'react'
import { CartWidget } from './CartWidget'
import "./navbar.css"

export const Navbar = () => {
  return (
    <header className='header'>
        <h1 className='header__title'> <span>G</span>amers</h1>
        <nav className='header__nav'>
          <ul className='header__ul'>
            <li>Auriculares</li>
            <li>Teclados</li>
            <li>Juegos</li>
          </ul>
        </nav>
        <CartWidget />
    </header>
  )
}
