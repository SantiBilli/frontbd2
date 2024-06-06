import React from 'react'
import '../styles/Header.css';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";

const Header = ({botonAdmin}) => {

  const navigate = useNavigate()

  return (
    <header className='header-box'>
        <div className='header-left'>
            <h2>Mini Market</h2>
        </div>
        <h3 className='header-pedidos' onClick={() => navigate("/mispedidos")}>Mis Pedidos</h3>

        <div className="header-right">
            <button className='cart-header'><FaShoppingCart/></button>
            <button className = 'header-upload' style={{display: botonAdmin ? 'flex' : 'none'}} onClick={() => {navigate("/publicar")}}>UPLOAD<MdAddShoppingCart/></button>
        </div>
    </header>
  )
}

export default Header