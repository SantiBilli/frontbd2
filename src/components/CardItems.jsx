import React, { useState } from 'react'
import '../styles/CardItems.css'
import Agua from '../assets/agua.jpg';


const CardItems = ({url, setItemsPedido}) => {

  const handleClick = () => {
    setItemsPedido((prevItems) => [...prevItems, url.nombreProducto])
  }

  return (
    <div className='Card-Product'>
        <div className='Card-top'>
            <img src={`data:image/png;base64,${url.imagen}`}  className ='img-card-items' alt = {`Imagen ${url._id}`} />
            <button className='Absolute-Button' onClick={handleClick}>+</button>
        </div>
        <div className='Card-bottom'>
            <p className ='title-card-items'>{url.nombreProducto}</p>
            <h3 className ='price-card-items'>${url.precio}</h3>
        </div>
    </div>
  )
}

export default CardItems