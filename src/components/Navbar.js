import React from 'react'
import { CartWidget } from './CartWidget'
import "./navbar.css"
import { Link } from "react-router-dom";


export const Navbar = () => {

  return (
    <header className='header'>
        <Link to={"/"}>
          <h1 className='header__title'> <span>G</span>amers</h1>
        </Link>
        <nav className='header__nav'>
          <ul className='header__ul'>
            <Link to={"/categoria/auriculares"}>Auriculares</Link>
            <Link to={"/categoria/teclados"}>Teclados</Link>
            <Link to={"/categoria/juegos"}>Juegos</Link>
            {/* <li>Auriculares</li>
            <li>Teclados</li>
            <li>Juegos</li> */}
          </ul>
        </nav>
        <CartWidget />
    </header>
  )
}
