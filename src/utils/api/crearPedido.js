export const crearPedido = async (credentials) => {

    const token = localStorage.getItem("userToken")

    console.log(credentials);

    const response = await fetch("http://localhost:3500/api/crear-pedido", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json","Authorization":`Bearer ${token}`},
        body: JSON.stringify(credentials)
    })

    if (!response.ok) return false

    return true
}