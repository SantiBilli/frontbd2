import React, { useState } from 'react'
import '../styles/CardItems.css'
import Agua from '../assets/agua.jpg';



const CardItems = ({url, listaCarrito}) => {

  const isProductContained = listaCarrito.some(producto => producto.nombreProducto === url.nombreProducto);

  // const handleClickRestar = async () = {
  //    //idUsuario
  //    //idProducto nombreProducto precio cantidad
  // }

  return (
    <div className='Card-Product'>
            <img src={`http://localhost:3500/api/images/products/${url.imagen}`}  className ='img-card-items' alt = {`Imagen ${url._id}`} />
            <h2 className ='title-card-items'>{url.nombreProducto}</h2>
            <p className ='price-card-items'>${url.precio}</p>
            <button className="buy02" type="button" disabled={isProductContained}>
                <span className="button__text">Add Item</span>
                <span className="button__icon"><svg className="svg" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
            </button>
    </div>
  )
}

export default CardItems