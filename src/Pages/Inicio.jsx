import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import CardItems from '../components/CardItems';
import '../styles/Inicio.css';
import Vacio from '../assets/Vacio.svg';
import CardItemsPedido from '../components/CardItemsPedido';
import productos from '../Data/Productos2';
import { sendToken } from '../utils/api/checkToken';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../utils/api/fileUpload';
import { checkRol } from '../utils/api/checkRol';


const Inicio = () => {

  const [arr, setArr] = useState([])
  const [admin, setAdmin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('userToken')
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

    sendTokenToServer()
    handlePosts()
    checkAdmin()
  },[])

  const [itemsPedido, setItemsPedido] = useState([]);
  
  return (
    <>
      <Header botonAdmin={admin}/>
      <div className="all-box-inicio">
        <div className="left-box-inicio">
          {arr.map ((url,index) => (
            <CardItems key={index} url={url} setItemsPedido={setItemsPedido} />
          ))}
        </div>
        <hr className='linea-media-inicio'/>
        <div className="right">
          <div className='right-box-inicio'>
            <h3>Mi pedido</h3>
            <img src={Vacio} alt="" />
            <p>El pedido esta vacio!</p>
            <CardItemsPedido items={itemsPedido}/>
            <button className='boton-pagar'>Pagar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio;