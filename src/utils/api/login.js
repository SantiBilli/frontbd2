export const sendLoginForm = async (credentials) => {

    const response = await fetch("http://localhost:3500/api/login", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
    })

    if (response.status == 401) return 401;

    return response.json()
}