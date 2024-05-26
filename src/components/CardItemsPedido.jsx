import React from 'react'
import '../styles/CardItemsPedido.css'
import { FaTrash } from "react-icons/fa";

const CardItemsPedido = () => {

    return (
        <div className='Card-Product-pedido'>
            <div className="left-pedido">
                <p className='cantidad-items-pedido'>1x</p>
                <p className='nombre-item-pedido'>Agua Mineral</p>
            </div>
            <div className="right-pedido">
                <div className='box-right-pedido'>
                    <p>$700</p>
                    <div className='botones-cantidades'>
                        <button className='agregar-items-pedido-left'>-</button>
                        <button className='agregar-items-pedido-medio'><FaTrash/></button>
                        <button className='agregar-items-pedido-right'>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItemsPedido