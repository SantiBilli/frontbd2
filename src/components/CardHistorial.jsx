import React from 'react';
import '../styles/CardHistorial.css'
import { useNavigate } from 'react-router-dom';

const CardHistorial = ({pedido}) => {
    return(
        <div className='Card-Historial'>
            <div className='Card-Title'>
                <h2 className='title-text'>Numero de pedido: {pedido._id}</h2>
            </div>
            <hr className='line-historial'></hr>
            <div className='box-historial'>
                <div className='Left-Card'>
                    <p>Fecha de pedido: {pedido.fecha}</p>
                    <p>Dirección: {pedido.direccion}</p>
                    <p>Tipo de pago: {pedido.pago}</p>
                    <p>Total pagado: {pedido.subtotal}</p>
                </div>
                <div className='Right-Card'>
                    <p>Productos:</p>
                    <div className='Cantidad-Producto'>
                        <p>Agua</p>
                        <p>x5</p>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default CardHistorial;

// fecha
// direccion
// tipo de pago
// total pagado
// lista de productos