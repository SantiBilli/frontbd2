import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../styles/Pedido.css'
import { getCarrito } from '../utils/api/getCarrito';
import CardItemsPedido from '../components/CardItemsPedido';
import CardItemFinal from '../components/CardItemFinal';


const Pedido = () => {


    const [arrCarrito, setArrCarrito] = useState([])

    useEffect(() => {
    
        const userDataStriong = localStorage.getItem('userData')
        const userDataJSON = JSON.parse(userDataStriong)
        const userId = userDataJSON.userId
    
        
        const obtenerCarrito = async () => {
          const carrito = await getCarrito({userId})
    
          if (carrito == false) return
    
          setArrCarrito(carrito.productos);
        }
    
        obtenerCarrito()
      },[])

      console.log(arrCarrito);


  return (
    <>
    <Header/>
    <div className='pedido-box'>
        <div className="pedido-box-left">
            <div className='data-pedido'>
                <label>Nombre:</label>
                <p>Ignacio</p>
            </div>            
            <div className='data-pedido'>
                <label>Apellido:</label>
                <p>Billinghurst</p>
            </div>
            <div className='data-pedido'>
                <label>Direccion:</label>
                <input type="text"/>
            </div>
            <div className='data-pedido'>
                <label>Condicion ante IVA:</label>
                <div className='select-iva-conteiner'>
                    <select className= 'select-iva-pedido' id="opciones">
                        <option value="opcion1">Seleccione condicion ante el IVA</option>
                        <option value="opcion2">IVA Responsable Inscripto</option>
                        <option value="opcion3">IVA Responsable no Inscripto</option>
                        <option value="opcion4">IVA no Responsable</option>
                        <option value="opcion5">IVA Sujeto Exento</option>
                        <option value="opcion6">Consumidor Final</option>
                        <option value="opcion7">Responsable Monotributo</option>
                        <option value="opcion8">Sujeto no Categorizado</option>
                        <option value="opcion9">Proveedor del Exterior</option>
                        <option value="opcion10">Cliente del Exterior</option>
                        <option value="opcion11">IVA Liberado – Ley Nº 19.640</option>
                        <option value="opcion12">IVA Responsable Inscripto – Agente de Percepción</option>
                        <option value="opcion13">Pequeño Contribuyente Eventual</option>
                        <option value="opcion14">Monotributista Social</option>
                        <option value="opcion15">Pequeño Contribuyente Eventual Social</option>
                    </select>
                </div>
            </div>             
            <div className='data-pedido'>
                <label>Metodo de pago:</label>
                <div className='select-iva-conteiner'>
                    <select className= 'select-iva-pedido' id="opciones">
                        <option value="opcion1">Seleccione metodo de pago</option>
                        <option value="opcion2">Efectivo</option>
                        <option value="opcion2">Tarjeta Credito</option>
                        <option value="opcion2">Tarjeta Debito</option>
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
                    <h5>$1000</h5>
                    <h5>$1000</h5>
                    <h5>$1000</h5>
                    <h5>$1000</h5>
                </div>

            </div>
            <a className="pagar-pedido">Pagar Subtotal</a>
        </div>

        <hr className='barra-pedido'/>

        <div className="pedido-box-right">
        <h3>PEDIDO</h3>
        {/* {arrCarrito.map ((url) => (
            <CardItemsPedido parametros={url} key={url.idProducto}/>
          ))} */}
        <CardItemFinal/>
        </div>
        
    </div>
    </>
  )
}

export default Pedido