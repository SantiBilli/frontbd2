export const checkRol = async (token) => {

    const response = await fetch("https://backbd2-production.up.railway.app/api/check-rol", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`}
    })

    if (response.status == 401) return false;

    return response.json();
}