import React, { useEffect, useState } from 'react'
import '../styles/HistorialFacturas.css'
import Header from '../components/Header'
import CardHistorialFactura from '../components/CardHistorialFactura'
import { historialFacturas } from '../utils/api/historialFacturas';
import { sendToken } from '../utils/api/checkToken';
import { useNavigate } from 'react-router-dom';

const HistorialFacturas = () => {

  const [facturas, setFacturas] = useState([])

  const navigate = useNavigate()

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

      const obtenerFacturas = async () => {
        const facturas = await historialFacturas({userId})
        if (facturas == false) return
        setFacturas(facturas);
      }

      sendTokenToServer()
      obtenerFacturas()

  }, [])

  return (
    <>
    <Header/>
    <div className='box-historial-facturas'>
        {facturas.map ((factura) => (
                <CardHistorialFactura key={factura._id} infoFactura={factura}/>
        ))}
    </div>
    </>
  )
}

export default HistorialFacturas