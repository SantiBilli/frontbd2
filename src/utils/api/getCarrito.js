export const getCarrito = async (credentials) => {

    const token = localStorage.getItem("userToken")

    const response = await fetch("http://localhost:3500/api/get-carrito", {
        method: "POST",
        mode: "cors",
        headers: {"Authorization":`Bearer ${token}`},
        body: JSON.stringify(credentials)
    })

    if (!response.ok) return false

    return response.json()
}


// export const agregarNuevoItem = async (credentials) => {
//     const token = localStorage.getItem("userToken")

//     const response = await fetch("http://localhost:3500/api/get-carrito", {
//         method: "POST",
//         mode: "cors",
//         headers: {"Authorization":`Bearer ${token}`},
//         body: JSON.stringify(credentials)
//     })

//     if (!response.ok) return false

//     return true
// }