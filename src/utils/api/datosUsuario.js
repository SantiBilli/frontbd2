export const getDatosUsuario = async (credentials) => {

    const token = localStorage.getItem("userToken")

    const response = await fetch("http://localhost:3500/api/datos-usuarios", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json","Authorization":`Bearer ${token}`},
        body: JSON.stringify(credentials)
    })

    if (!response.ok) return false

    return response.json()
}