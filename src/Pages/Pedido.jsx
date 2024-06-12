import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../styles/Pedido.css'
import { getCarrito } from '../utils/api/getCarrito';
import CardItemFinal from '../components/CardItemFinal';
import { getDatosUsuario } from '../utils/api/datosUsuario';
import { crearPedido } from '../utils/api/crearPedido';
import { Navigate, useNavigate } from 'react-router-dom';
import { crearFactura } from '../utils/api/crearFactura';



const Pedido = () => {
    const [arrCarrito, setArrCarrito] = useState([])

    const [descuento, setDescuento] = useState(0)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [total, setTotal] = useState(0);
    const [direccion, setDireccion] = useState("")
    const [iva, setIva] = useState('Seleccione condicion ante el IVA')
    const [ivaValor, setIvaValor] = useState(0)
    const [pago, setPago] = useState('Seleccione metodo de pago')
    const navigate = useNavigate()

    const [enableButton, setEnableButton] = useState(false)

    useEffect(() => {
        if (iva == 'IVA Responsable Inscripto') setIvaValor(0.21)
        if (iva == 'Consumidor Final') setIvaValor(0.21)
        if (iva == 'Responsable Monotributo') setIvaValor(0.27)

        if (direccion == "") return setEnableButton(false)
        if (nombre == "") return setEnableButton(false)
        if (apellido == "") return setEnableButton(false)
        if (iva == 'Seleccione condicion ante el IVA') return setEnableButton(false)
        if (pago == 'Seleccione metodo de pago') return setEnableButton(false)

        setEnableButton(true)

    }, [direccion, nombre, apellido, iva, pago])

    useEffect(() => {

        const userDataStriong = localStorage.getItem('userData')
        const userDataJSON = JSON.parse(userDataStriong)
        const userId = userDataJSON.userId
        const email = userDataJSON.email
    
        
        const obtenerCarrito = async () => {
            const carrito = await getCarrito({userId})
            if (carrito == false) return

            setArrCarrito(carrito.productos);

            setTotal(carrito.productos.reduce((acc, item) => {
                return acc + item.cantidad * item.precio;
            }, 0))

            setDescuento(carrito.productos.reduce((acc, item) => {
                return acc + item.descuento*item.cantidad;
            }, 0))
        }

        const datosUsuario = async () => {
            const datos = await getDatosUsuario({email})
            
            setNombre(datos.nombre)
            setApellido(datos.apellido)
        }

        obtenerCarrito()
        datosUsuario()
      },[])


    const userDataStriong = localStorage.getItem('userData')
    const userDataJSON = JSON.parse(userDataStriong)
    const userId = userDataJSON.userId

    const handleClick = async () => {

        const subtotal = total - descuento + total*ivaValor
        const generarPedido = await crearPedido({arrCarrito, userId, nombre, apellido, direccion, iva, pago, subtotal})
        const generarFactura = await crearFactura({userId, nombre, apellido, direccion, iva, arrCarrito, total, descuento, ivaValor})

        navigate('/inicio')
    }

  return (
    <>
    <Header/>
    <div className='pedido-box'>
        <div className="pedido-box-left">
            <div className='data-pedido'>
                <label>Nombre:</label>
                <p>{nombre}</p>
            </div>            
            <div className='data-pedido'>
                <label>Apellido:</label>
                <p>{apellido}</p>
            </div>
            <div className='data-pedido'>
                <label>Direccion:</label>
                <input type="text" onChange={event => setDireccion(event.target.value)}/>
            </div>
            <div className='data-pedido'>
                <label>Condicion ante IVA:</label>
                <div className='select-iva-conteiner'>
                    <select className= 'select-iva-pedido' id="opciones" onChange={event => setIva(event.target.value)}>
                        <option value="Seleccione condicion ante el IVA">Seleccione condicion ante el IVA</option>
                        <option value="IVA Responsable Inscripto">IVA Responsable Inscripto</option>
                        <option value="Consumidor Final">Consumidor Final</option>
                        <option value="Responsable Monotributo">Responsable Monotributo</option>
                    </select>
                </div>
            </div>             
            <div className='data-pedido'>
                <label>Metodo de pago:</label>
                <div className='select-iva-conteiner'>
                    <select className= 'select-iva-pedido' id="opciones" onChange={event => setPago(event.target.value)}>
                        <option value="Seleccione metodo de pago">Seleccione metodo de pago</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Tarjeta Credito">Tarjeta Credito</option>
                        <option value="Tarjeta Debito">Tarjeta Debito</option>
                    </select>
                </div>
            </div>            
            <div className='precio-total-suma'>
                <div className='tipo-precio'>
                    <h5>Total:</h5>
                    <h5>Descuento:</h5>
                    <h5>IVA:</h5>
                    <h5>Subtotal a pagar:</h5>
                </div>
                <div className='valor-precio'>
                    <h5>${total}</h5>
                    <h5>${descuento}</h5>
                    <h5>${total*ivaValor}</h5>
                    <h5>${total - descuento + total*ivaValor}</h5>
                </div>

            </div>
            <button className="pagar-pedido" onClick={handleClick} disabled={!enableButton}>Pagar Subtotal</button>
        </div>

        <hr className='barra-pedido'/>

        <div className="pedido-box-right">
        <h3>PEDIDO</h3>
        {arrCarrito.map((url) => (
            <CardItemFinal url={url} key={url.idProducto}/>
        ))}
        <CardItemFinal/>
        </div>
        
    </div>
    </>
  )
}

export default Pedido