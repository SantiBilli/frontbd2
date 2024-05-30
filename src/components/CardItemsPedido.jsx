import React, { useState, useEffect } from 'react';
import '../styles/CardItemsPedido.css';
import { FaTrash } from 'react-icons/fa';
import { borrarProducto, cambiarCantidad } from '../utils/api/getCarrito';

const CardItemsPedido = ({parametros}) => {

    const [cantidad, setCantidad] = useState(parametros.cantidad)
    
    const userDataStriong = localStorage.getItem('userData')
    const userDataJSON = JSON.parse(userDataStriong)
    const userId = userDataJSON.userId
    const idProducto = parametros.idProducto

    const handleClickRestar = async () => {
        if (cantidad == 1) return
        setCantidad(cantidad-1)
    }
    
    const handleClickSumar = async () => {
        setCantidad(cantidad+1)
    }

    useEffect(() => {
        const cambioCantidad = async () => {
            await cambiarCantidad({userId, idProducto, cantidad})
        }

        cambioCantidad()
    }, [cantidad])

    const handleClickTrash = async () => {
        console.log(1);
        await borrarProducto({userId, idProducto})

        return
    }

    return (
        <div className='pedidos-box'>
            <div className='Card-Product-pedido'>
                <div className="left-pedido">
                    <p className='cantidad-items-pedido'>{cantidad}x</p>
                    <p className='nombre-item-pedido'>{parametros.nombreProducto}</p>
                </div>
                <div className="right-pedido">
                    <div className='box-right-pedido'>
                        <p>${parametros.precio}</p>
                        <div className='botones-cantidades'>
                            <button className='agregar-items-pedido-left' onClick={handleClickRestar}>-</button>
                            <button className='agregar-items-pedido-medio' onClick={handleClickTrash}><FaTrash/></button>
                            <button className='agregar-items-pedido-right' onClick={handleClickSumar}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardItemsPedido;