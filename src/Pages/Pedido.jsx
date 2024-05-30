import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../styles/Pedido.css'
import { getCarrito } from '../utils/api/getCarrito';
import CardItemFinal from '../components/CardItemFinal';
import { getDatosUsuario } from '../utils/api/datosUsuario';
import { crearPedido } from '../utils/api/crearPedido';


const Pedido = () => {
    const [arrCarrito, setArrCarrito] = useState([])

    const [descuento, setDescuento] = useState(0)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [total, setTotal] = useState(0);
    const [direccion, setDireccion] = useState('')
    const [iva, setIva] = useState('')
    const [pago, setPago] = useState('')

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
                return acc + item.descuento;
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
        const subtotal = total - descuento + total*0.21
        const generarPedido = await crearPedido({arrCarrito, userId, nombre, apellido, direccion, iva, pago, subtotal})
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
                        <option value="IVA Responsable no Inscripto">IVA Responsable no Inscripto</option>
                        <option value="IVA no Responsable">IVA no Responsable</option>
                        <option value="IVA Sujeto Exento">IVA Sujeto Exento</option>
                        <option value="Consumidor Final">Consumidor Final</option>
                        <option value="Responsable Monotributo">Responsable Monotributo</option>
                        <option value="Sujeto no Categorizado">Sujeto no Categorizado</option>
                        <option value="Proveedor del Exterior">Proveedor del Exterior</option>
                        <option value="Cliente del Exterior">Cliente del Exterior</option>
                        <option value="IVA Liberado – Ley Nº 19.640">IVA Liberado – Ley Nº 19.640</option>
                        <option value="IVA Responsable Inscripto – Agente de Percepción">IVA Responsable Inscripto – Agente de Percepción</option>
                        <option value="Pequeño Contribuyente Eventual">Pequeño Contribuyente Eventual</option>
                        <option value="Monotributista Social">Monotributista Social</option>
                        <option value="Pequeño Contribuyente Eventual Social">Pequeño Contribuyente Eventual Social</option>
                    </select>
                </div>
            </div>             
            <div className='data-pedido'>
                <label>Metodo de pago:</label>
                <div className='select-iva-conteiner'>
                    <select className= 'select-iva-pedido' id="opciones" onChange={event => setPago(event.target.value)}>
                        <option value="opcion1">Seleccione metodo de pago</option>
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
                    <h5>${total*0.21}</h5>
                    <h5>${total - descuento + total*0.21}</h5>
                </div>

            </div>
            <a className="pagar-pedido" onClick={handleClick}>Pagar Subtotal</a>
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