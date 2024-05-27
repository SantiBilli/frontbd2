import React, { useEffect, useState }  from 'react';
import '../styles/Publicar.css';
import Header from '../components/Header';

const Publicar = () => {
    const [archivo, setArchivo] = useState(null)
    const [nombre, setNombre] = useState("")
    const [desc, setDesc] = useState("")
    const [precio, setPrecio] = useState()
    const [error, setError] = useState(false)
    const [mostrarBoton, setMostrarBoton] = useState(false)

    useEffect(() => {
        if (nombre == "") return setMostrarBoton(false)
        if (desc == "") return setMostrarBoton(false)
        if (precio == "") return setMostrarBoton(false)
        if (archivo == null) return setMostrarBoton(false)
        return setMostrarBoton(true)
    },[nombre, desc, precio, archivo])

    const handleUpload = async () => {
        const userData = JSON.parse(localStorage.getItem("userData")).userId
        const formdata = new FormData();
        formdata.append('file', archivo)
        formdata.append('nameProd', nombre)
        formdata.append('description', desc)
        formdata.append('price', precio)
        formdata.append('userId',userData)
    const response = await fileUpload(formdata)

    if (response == 204) return setError(true)

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
                <textarea name="" id="" onChange={event => setDesc(event.target.value)}></textarea>
            </div> 
            <div className="input-publicar">
                <label>Precio:</label>
                <input type="text" required onChange={event => setPrecio(event.target.value)}/>
            </div> 
            <div className="input-publicar">
                <label>Adjuntar Imagen:</label>
                <input type="file" required accept="image/png" onChange={event => setArchivo(event.target.files[0])}/>
            </div> 
            <button className='publicar-boton' disabled={!mostrarBoton} onClick={handleUpload}>PUBLICAR PRODUCTO</button>
        </div>
    </div>
    </>
)
}

export default Publicar