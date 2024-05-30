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

  const [refresh, setRefresh] = useState(false);

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

  useEffect(() => {
    const userDataStriong = localStorage.getItem('userData')

    if (!userDataStriong) return navigate("/login")

    const userDataJSON = JSON.parse(userDataStriong)
    const userId = userDataJSON.userId

    const obtenerCarrito = async () => {
      const carrito = await getCarrito({userId})

      if (carrito == false) return

      setArrCarrito(carrito.productos);
    }

    obtenerCarrito()
  }, [refresh]);

  return (
    <>
      <Header botonAdmin={admin}/>
      <div className="all-box-inicio">
        <div className="left-box-inicio">
          {arr.map ((url) => (
            <CardItems key={url._id} url={url} refresh={setRefresh}/>
          ))}
        </div>
        <hr className='linea-media-inicio'/>
    
        <div className='right-box-inicio'>
          <h3>Mi pedido</h3>
          <div className = 'right-box-inicio-vacio' style={{display: arrCarrito.length == 0 ? 'flex' : 'none'}}>
            <img src={Vacio} alt=""/>
            <p>El pedido esta vacio!</p>
          </div>
          {arrCarrito.map ((url) => (
            <CardItemsPedido parametros={url} key={url.idProducto} refresh={setRefresh}/>
          ))}
          <button className='boton-pagar' onClick={() => navigate("/pedido")}>Realizar Pedido</button>
        </div>
      </div>
    </>
  )
}

export default Inicio;