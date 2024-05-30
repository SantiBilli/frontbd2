import React, { useState, useEffect } from 'react';
import '../styles/CardItemFinal.css'



const CardItemFinal = ({url}) => {

    return (
        <>
        { url && 
        <div className='pedidosFinal-box'>
            <div className='Card-Product-pedidoFinal'>
                <div className="left-pedidoFinal">
                    <p className='cantidad-items-pedidoFinal'>{url.cantidad}x</p>
                    <p className='nombre-item-pedidoFinal'>{url.nombreProducto}</p>
                </div>
                <div className="right-pedidoFinal">
                    <div className='box-right-pedidoFinal'>
                        <p>${url.precio*url.cantidad}</p>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default CardItemFinal