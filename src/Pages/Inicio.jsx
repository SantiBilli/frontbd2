import React, { useEffect, useState } from 'react'
import './Inicio.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom'
import { sendToken } from "../utils/api/checkToken"
import { getPosts } from "../utils/api/fileUpload"

const Inicio = () => {
  
  const [arr, setArr] = useState([])
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
      
      // console.log(response);

      if (!response) return
  
      setArr(response)
    }

    sendTokenToServer()
    handlePosts()
  },[])
  
  return (
      <div>
        <Header/>
        <Sidebar className = 'sidebar-inicio'/>
        <div className='conteiner'>
          <div className='grid-productos'>
            {arr.map((url, index) => (
              <div className="displayImages">
                <Card url={url}/>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default Inicio