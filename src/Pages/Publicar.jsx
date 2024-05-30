import React, { useEffect, useState }  from 'react';
import '../styles/Publicar.css';
import Header from '../components/Header';
import { fileUpload } from '../utils/api/fileUpload';
import { useNavigate } from 'react-router-dom';
import { checkRol } from '../utils/api/checkRol';

const Publicar = () => {
    const [imagen, setImagen] = useState(null)
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState()
    const [error, setError] = useState(false)
    const [mostrarBoton, setMostrarBoton] = useState(false)
    const [descuento, setDescuento] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('userToken')
        if (!token) return navigate("/login")
    
        const checkAdmin = async () => {
          const responseRol = await checkRol(token);
    
          if (responseRol.rol == 'default') return navigate("/login")
        }
    
        checkAdmin()
      },[])

    useEffect(() => {
        if (nombre == "") return setMostrarBoton(false)
        if (descripcion == "") return setMostrarBoton(false)
        if (precio == "") return setMostrarBoton(false)
        if (imagen == null) return setMostrarBoton(false)
        return setMostrarBoton(true)
    },[nombre, descripcion, precio, imagen])

    const handleUpload = async () => {
        const formdata = new FormData();
        formdata.append('imagen', imagen)
        formdata.append('nombreProducto', nombre)
        formdata.append('descripcion', descripcion)
        formdata.append('precio', precio)
        formdata.append('descuento', descuento)
    
        // for (const pair of formdata.entries()) {
        //     console.log(pair[0], pair[1]);
        // } //Muestro el formdata

        const response = await fileUpload(formdata)

        if (response == 204) return setError(true)

        navigate('/inicio')
        return setError(false)
    }

return (
    <>
    <Header/>
    <div className='conteiner-publicar'>
        <div className="publicar">
            <h2>Publicar Producto</h2>
            <div className="input-publicar">
                <label>Nombre:</label>
                <input type="text" required onChange={event => setNombre(event.target.value)}/>
            </div> 
            <div className="input-publicar-description">
                <label>Descripcion:</label>
                <textarea name="" id="" onChange={event => setDescripcion(event.target.value)}></textarea>
            </div> 
            <div className="input-publicar">
                <label>Precio:</label>
                <input type="text" required onChange={event => setPrecio(event.target.value)}/>
            </div> 
            <div className="input-publicar">
                <label>Descuento:</label>
                <input type="text" required onChange={event => setDescuento(event.target.value)}/>
            </div> 
            <div className="input-publicar">
                <label>Adjuntar Imagen:</label>
                <input type="file" required accept="image/png" onChange={event => setImagen(event.target.files[0])}/>
            </div> 
            <button className='publicar-boton' disabled={!mostrarBoton} onClick={handleUpload}>PUBLICAR PRODUCTO</button>
        </div>
    </div>
    </>
)
}

export default Publicar