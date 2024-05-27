import React, { useState } from 'react'
import '../styles/CardItems.css'
import Agua from '../assets/agua.jpg';



const CardItems = ({url, setItemsPedido}) => {

  const handleClick = () => {
    setItemsPedido((prevItems) => [...prevItems, url.nombreProducto])
  }

  return (
    <div className='Card-Product'>
            <img src={`data:image/png;base64,${url.imagen}`}  className ='img-card-items' alt = {`Imagen ${url._id}`} />
            <h2 className ='title-card-items'>{url.nombreProducto}</h2>
            <p className ='price-card-items'>${url.precio}</p>
            <button class="buy02" type="button" onClick={handleClick}>
                <span class="button__text">Add Item</span>
                <span class="button__icon"><svg class="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
            </button>
    </div>
  )
}

export default CardItems