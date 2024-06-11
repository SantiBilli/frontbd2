import React from 'react';
import '../styles/CardHistorial.css'
import { useNavigate } from 'react-router-dom';

const CardHistorial = ({infoPedido}) => {
    return(
        <div className='Card-Historial'>
            <div className='Card-Title'>
                <h2 className='title-text'>ID de pedido: {infoPedido._id}</h2>
            </div>
            <hr className='line-historial'></hr>
            <div className='box-historial'>
                <div className='Left-Card'>
                    <p>Fecha de pedido: {infoPedido.fecha}</p>
                    <p>Dirección: {infoPedido.direccion}</p>
                    <p>Tipo de pago: {infoPedido.pago}</p>
                    <p>Total pagado: {infoPedido.subtotal}</p>
                </div>
                <div className='Right-Card'>
                    <p>Productos:</p>
                    <div className='Cantidad-Producto'>
                        {infoPedido.productos.map ((producto) => (
                            <p key= {producto.nombreProducto}>{producto.nombreProducto} X {producto.cantidad}</p>
                        ))}
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default CardHistorial;
