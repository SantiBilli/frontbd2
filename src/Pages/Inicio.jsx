import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import CardItems from '../components/CardItems';
import '../styles/Inicio.css';
import Vacio from '../assets/Vacio.svg';
import CardItemsPedido from '../components/CardItemsPedido';
import { sendToken } from '../utils/api/checkToken';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../utils/api/fileUpload';
import { checkRol } from '../utils/api/checkRol';
import { getCarrito } from '../utils/api/getCarrito';


const Inicio = () => {

  const [arr, setArr] = useState([])
  const [admin, setAdmin] = useState(false)
  const [arrCarrito, setArrCarrito] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('userToken')

    const userDataStriong = localStorage.getItem('userData')
    const userDataJSON = JSON.parse(userDataStriong)
    const userId = userDataJSON.userId

    if (!token) return navigate("/login")
    
    const sendTokenToServer = async () => {
      const response = await sendToken(token)
      if (response == false) return navigate('/login')
    }

    const handlePosts = async () => {
      const response = await getPosts();

      if (!response) return

      setArr(response)
    }

    const checkAdmin = async () => {
      const responseRol = await checkRol(token);
      
      if (responseRol.rol == 'admin') return setAdmin(true)
      if (responseRol.rol == 'default') return setAdmin(false)
    }

    const obtenerCarrito = async () => {
      const carrito = await getCarrito({userId})

      if (carrito == false) return

      setArrCarrito(carrito.productos);
    }

    sendTokenToServer()
    obtenerCarrito()
    handlePosts()
    checkAdmin()
  },[])

  return (
    <>
      <Header botonAdmin={admin}/>
      <div className="all-box-inicio">
        <div className="left-box-inicio">
          {arr.map ((url) => (
            <CardItems key={url._id} url={url}/>
          ))}
        </div>
        <hr className='linea-media-inicio'/>
    
        <div className='right-box-inicio'>
          <h3>Mi pedido</h3>
          <div style={{display: arrCarrito.length == 0 ? 'flex' : 'none'}}>
            <img src={Vacio} alt=""/>
            <p>El pedido esta vacio!</p>
          </div>
          {arrCarrito.map ((url) => (
            <CardItemsPedido parametros={url} key={url.idProducto}/>
          ))}
          <button className='boton-pagar'>Pagar</button>
        </div>
      </div>
    </>
  )
}

export default Inicio;