import React from 'react';
import '../styles/CardHistorial.css'
import { useNavigate } from 'react-router-dom';
const CardHistorial = () => {
    return(
        <div className='Card-Historial'>
            <div className='Card-Title'>
                <h2 className='title-text'>Numero de pedido:</h2>
            </div>
            <hr className='line-historial'></hr>
            <div className='box-historial'>
                <div className='Left-Card'>
                    <p>Fecha de pedido:</p>
                    <p>Dirección:</p>
                    <p>Tipo de pago:</p>
                    <p>Total pagado:</p>
                </div>
                <div className='Right-Card'>
                    <p>Productos:</p>
                    <div className='Cantidad-Producto'>
                        <p>Agua</p>
                        <p>x5</p>
                    </div>                    
                    <div className='Cantidad-Producto'>
                        <p>Cunnington Cola</p>
                        <p>x2</p>
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