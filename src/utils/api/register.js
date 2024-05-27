export const sendRegisterForm = async (credentials) => {
    
    console.log(credentials);

    const response = await fetch("https://backbd2-production.up.railway.app/api/register", {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
    })

    if (response.status == 501) return false;

    return true
}