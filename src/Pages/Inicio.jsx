import React, { useState } from 'react'
import Header from '../components/Header';
import CardItems from '../components/CardItems';
import '../styles/Inicio.css';
import Vacio from '../assets/Vacio.svg';
import CardItemsPedido from '../components/CardItemsPedido';
import productos from '../Data/Productos2';


const Inicio = () => {
  const [itemsPedido, setItemsPedido] = useState([]);

  const arr = productos;

  return (
    <>
      <Header/>
      <div className="all-box-inicio">
        <div className="left-box-inicio">
          {arr.map ((url,index) => (
            <CardItems key={index} url={url} setItemsPedido={setItemsPedido} />
          ))}
        </div>
        <hr className='linea-media-inicio'/>
        <div className="right">
          <div className='right-box-inicio'>
            <h3>Mi pedido</h3>
            <img src={Vacio} alt="" />
            <p>El pedido esta vacio!</p>
            <CardItemsPedido items={itemsPedido}/>
            <button className='boton-pagar'>Pagar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio;