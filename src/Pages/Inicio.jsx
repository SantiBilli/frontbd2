import React, { useState } from 'react'
import Header from '../components/Header';
import CardItems from '../components/CardItems';
import '../styles/Inicio.css';
import Vacio from '../assets/Vacio.svg';
import CardItemsPedido from '../components/CardItemsPedido';



const Inicio = () => {


  return (
    <>
      <Header/>
      <div className="all-box-inicio">
        <div className="left-box-inicio">
          <CardItems/>
        </div>
        <hr className='linea-media-inicio'/>
        <div className="right">
          <div className='right-box-inicio'>
            <h3>Mi pedido</h3>
            <img src={Vacio} alt="" />
            <p>El pedido esta vacio!</p>
            <CardItemsPedido/>
            <button className='boton-pagar'>Pagar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio;