import React, { useState, useEffect } from 'react';
import '../styles/CardItemFinal.css'



const CardItemFinal = () => {



  return (
    <div className='pedidosFinal-box'>
        <div className='Card-Product-pedidoFinal'>
            <div className="left-pedidoFinal">
                <p className='cantidad-items-pedidoFinal'>1x</p>
                <p className='nombre-item-pedidoFinal'>Agua</p>
            </div>
            <div className="right-pedidoFinal">
                <div className='box-right-pedidoFinal'>
                    <p>$1000</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardItemFinal