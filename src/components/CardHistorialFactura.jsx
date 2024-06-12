import React from 'react'
import '../styles/CardHistorialFactura.css'

const CardHistorialFactura = ({infoFactura}) => {
  return (
    <div className='Card-Historial-Factura'>
        <div className='Card-Title'>
            <h2 className='title-text'>Numero Factura: {infoFactura._id}</h2>
            <h2 className='tipo-factura'>{infoFactura.tipoFactura}</h2>
        </div>
        <hr className='line-Historial-Factura'></hr>
        <div className='box-Historial-Factura'>
            <div className='Left-Card-Historial-Factura'>
                <p>Fecha de pedido: {infoFactura.fecha}</p>
                <p>Dirección: {infoFactura.direccion}</p>
            </div>
            <div className='bottom-Card-Historial-Factura'>
                <p>Productos:</p>
                <div className='Producto-Historial-Factura'>
                    {infoFactura.productos.map ((producto) => (
                        <>
                            <div className='producto-precio-Historial-Factura'>
                                <p key= {producto.nombreProducto}>{producto.nombreProducto} X {producto.cantidad}</p>
                                <p>$ {producto.precio}</p>
                            </div>
                        </>
                    ))}
                </div>                    
            </div>
        <hr className='line-Historial-Factura'></hr>
        <div className='subtotal-Historial-Factura'>
            <div className=' elemento-subtotal-factura'>
                <p>Subtotal:</p>
                <p>$ {infoFactura.total}</p> 
            </div>            
            <div className=' elemento-subtotal-factura'>
                <p>Descuento:</p>
                <p>$ {infoFactura.descuento}</p>
            </div>            
            <div className=' elemento-subtotal-factura'>
                <p>IVA:</p>
                <p>$ {infoFactura.total*infoFactura.ivaValor}</p>
            </div>            
            <div className=' elemento-subtotal-factura'>
                <p>Total:</p>
                <p>$ {infoFactura.total + infoFactura.total*infoFactura.ivaValor - infoFactura.descuento}</p>
            </div>

         </div>
        </div>
    </div>
  )
}

export default CardHistorialFactura
