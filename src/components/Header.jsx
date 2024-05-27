import React from 'react'
import '../styles/Header.css';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = ({botonAdmin}) => {

  const navigate = useNavigate()

  return (
    <header className='header-box'>
        <div className='header-left'>
            <h2>Mini Market</h2>
        </div>
        <div className="header-right">
            <button>User</button>
            <button><FaShoppingCart/></button>
            <button style={{display: botonAdmin ? 'flex' : 'none'}} onClick={() => {navigate("/publicar")}}>Admin Config</button>
        </div>
    </header>
  )
}

export default Header