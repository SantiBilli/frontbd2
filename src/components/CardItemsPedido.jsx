import React, { useState, useEffect } from 'react';
import '../styles/CardItemsPedido.css';
import { FaTrash } from 'react-icons/fa';

const CardItemsPedido = ({ items, onRemoveItem }) => {
    const [cantidades, setCantidades] = useState([]);

    useEffect(() => {
        if (items.length > cantidades.length) {
            setCantidades([...cantidades, ...Array(items.length - cantidades.length).fill(1)]);
        }
    }, [items]);

    const incrementarCantidad = (index) => {
        const newCantidades = [...cantidades];
        newCantidades[index] += 1;
        setCantidades(newCantidades);
    };

    const decrementarCantidad = (index) => {
        const newCantidades = [...cantidades];
        if (newCantidades[index] > 1) {
            newCantidades[index] -= 1;
            setCantidades(newCantidades);
        }
    };

    const eliminarItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        const newCantidades = cantidades.filter((_, i) => i !== index);
        setCantidades(newCantidades);
        onRemoveItem(newItems);
    };



    return (
        <div className='pedidos-box'>
            {items.length > 0 && 
                items.map((nombreProducto, index) => (
                    <div key={index} className='Card-Product-pedido'>
                        <div className="left-pedido">
                            <p className='cantidad-items-pedido'>{cantidades[index]}x</p>
                            <p className='nombre-item-pedido'>{nombreProducto}</p>
                        </div>
                        <div className="right-pedido">
                            <div className='box-right-pedido'>
                                <p>$700</p>
                                <div className='botones-cantidades'>
                                    <button className='agregar-items-pedido-left' onClick={() => decrementarCantidad(index)}>-</button>
                                    <button className='agregar-items-pedido-medio' onClick={() => eliminarItem(index)}><FaTrash /></button>
                                    <button className='agregar-items-pedido-right' onClick={() => incrementarCantidad(index)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CardItemsPedido;