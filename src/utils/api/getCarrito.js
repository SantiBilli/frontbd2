export const getCarrito = async (credentials) => {

    const token = localStorage.getItem("userToken")

    const response = await fetch("http://localhost:3500/api/get-carrito", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json","Authorization":`Bearer ${token}`},
        body: JSON.stringify(credentials)
    })

    if (!response.ok) return false

    return response.json()
}


export const agregarNuevoItem = async (credentials) => {

    const token = localStorage.getItem("userToken")

    const response = await fetch("http://localhost:3500/api/agregar-producto-carrito", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
        body: JSON.stringify(credentials)
    })

    if (response.status == 500) return false

    return true
}

export const cambiarCantidad = async (credentials) => {

    const token = localStorage.getItem("userToken")

    const response = await fetch("http://localhost:3500/api/cambiar-cantidad", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
        body: JSON.stringify(credentials)
    })

    if (response.status == 500) return false

    return true
}

export const borrarProducto = async (credentials) => {

    const token = localStorage.getItem("userToken")

    const response = await fetch("http://localhost:3500/api/borrar-producto", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
        body: JSON.stringify(credentials)
    })

    if (response.status == 500) return false

    return true
}