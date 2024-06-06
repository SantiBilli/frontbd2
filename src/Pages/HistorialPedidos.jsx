import React from 'react'
import Header from '../components/Header';
import CardHistorial from '../components/CardHistorial';
import '../styles/HistorialPedidos.css';
const HistorialPedidos = () => {
    return (
        <>
            <Header/>
            <div className='box-historial-pedidos'>
                <CardHistorial/>
            </div>
        </>
    )
}

export default HistorialPedidos;