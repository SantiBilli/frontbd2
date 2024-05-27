export const fileUpload = async (formdata) => {
    const token = localStorage.getItem("userToken")
    
    for (const pair of formdata.entries()) {
       console.log(pair[0], pair[1]);
    } //Muestro el formdata

    if (!token) return

    const response = await fetch("https://backbd2-production.up.railway.app/api/upload-product", {
        method: "POST",
        mode: "cors",
        headers: {"Authorization":`Bearer ${token}`},
        body: formdata
    })

    if (response.status == 204) return 204;

    return true
}

export const getPosts = async () => {
    const token = localStorage.getItem("userToken")

    const response = await fetch("https://backbd2-production.up.railway.app/api/get-products", {
        method: "GET",
        mode: "cors",
        headers: {"Authorization":`Bearer ${token}`}
    })

    if (!response.ok) return false

    return response.json()
}