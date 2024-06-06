import React from 'react';
import '../styles/CardHistorial.css'
import { useNavigate } from 'react-router-dom';
const CardHistorial = () => {
    return(
        <div className='Card-Historial'>
            <div className='Left-Card'>
                <div className='Title-Card'>
                    <h2 className ='title-card-items'>Numero de pedido:</h2>
                {/* <hr></hr> */}
                </div>
                <div>
                    <p>Fecha de pedido:</p>
                    <p>Dirección:</p>
                    <p>Tipo de pago:</p>
                    <p>Total pagado:</p>
                </div>
            </div>
            <div className='Right-Card'>
                <p>Productos:</p>
                <p>Agua x2</p>
                <p>Pizza de Napolitana x3</p>
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