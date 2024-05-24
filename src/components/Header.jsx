import React from 'react'
import '../styles/Header.css';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className='header-box'>
        <div className='header-left'>
            <h2>Mini Market</h2>
        </div>
        <div className="header-right">
            <button>User</button>
            <button><FaShoppingCart/></button>
        </div>
    </header>
  )
}

export default Header