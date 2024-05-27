export const sendLoginForm = async (credentials) => {

    const response = await fetch("https://backbd2-production.up.railway.app/api/login", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
    })

    if (response.status == 401) return 401;

    return response.json()
}