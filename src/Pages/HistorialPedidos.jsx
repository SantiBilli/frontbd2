import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import CardHistorial from '../components/CardHistorial';
import '../styles/HistorialPedidos.css';
import { useNavigate } from 'react-router-dom';
import { sendToken } from '../utils/api/checkToken';
import { historialPedidos } from '../utils/api/historialPedidos';

const HistorialPedidos = () => {

    const [pedidos, setPedidos] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('userToken')

        if (!token) return navigate("/login")
        
        const userDataStriong = localStorage.getItem('userData')
        const userDataJSON = JSON.parse(userDataStriong)
        const userId = userDataJSON.userId
        
        const sendTokenToServer = async () => {
          const response = await sendToken(token)
          if (response == false) return navigate('/login')
        }

        const obtenerPedidos = async () => {
          const pedidos = await historialPedidos({userId})
          if (pedidos == false) return
          setPedidos(pedidos);
        }

        sendTokenToServer()
        obtenerPedidos()

    }, [])
    


    return (
        <>
            <Header/>
            <div className='box-historial-pedidos'>
            {pedidos.map ((pedido) => (
                <CardHistorial key={pedido._id} infoPedido={pedido}/>
            ))}
            </div>
        </>
    )
}

export default HistorialPedidos;