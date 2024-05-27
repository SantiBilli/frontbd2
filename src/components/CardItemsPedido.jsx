import React, { useState } from 'react'
import '../styles/CardItemsPedido.css'
import { FaTrash } from "react-icons/fa";

const CardItemsPedido = ({items}) => {

    const [cantidad, setCantidad] = useState(1);

    const incrementarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const decrementarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
    items.length > 0 && 
        items.map((nombreProducto) => {
        return (
        <div className='Card-Product-pedido'>
            <div className="left-pedido">
                <p className='cantidad-items-pedido'>{cantidad}x</p>
                <p className='nombre-item-pedido'>{nombreProducto}</p>
            </div>
            <div className="right-pedido">
                <div className='box-right-pedido'>
                    <p>$700</p>
                    <div className='botones-cantidades'>
                        <button className='agregar-items-pedido-left' onClick={decrementarCantidad}>-</button>
                        <button className='agregar-items-pedido-medio'><FaTrash/></button>
                        <button className='agregar-items-pedido-right' onClick={incrementarCantidad}>+</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }))
}

export default CardItemsPedido