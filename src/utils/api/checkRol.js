export const checkRol = async (token) => {

    const response = await fetch("http://localhost:3500/api/check-rol", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`}
    })

    if (response.status == 401) return false;

    return response.json();
}