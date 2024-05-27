import { useEffect, useState } from "react"
import "../styles/LoginRegister.css"
import { sendLoginForm } from "../utils/api/login";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useNavigate, Link } from "react-router-dom";

export function Login() {

    const [email, setEmail] = useState('');
    const [contra, setContra] = useState('');
    const [passStatus, setPassStatus] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("userToken")
        localStorage.removeItem("userData")
    }, []) //Borrar Local Storage en el primer render.

    const submitForm = async () => {
        const response = await sendLoginForm({email, contra})

        if (response == 401) {
            setPassStatus(true)
            return 
        }

        localStorage.setItem("userToken",JSON.stringify(response.token))
        localStorage.setItem("userData",JSON.stringify(response.userData))

        navigate("/inicio")
        return
    }

    // const redirectRegister = () => {
    //     navigate("/register")
    // }

    return (
        <>
        <HelmetProvider>
            <Helmet>
                <title>Base de Datos II | Login</title>
            </Helmet>
        </HelmetProvider>

        <main className="login-main">
            <div className="caja-form">
                <div className="form">
                    <h2>Login</h2>
                    <form>
                        <div>
                            <div className = "input-box">
                                <input type="text" required onChange={event => setEmail(event.target.value)}/>
                                <label>Email</label>
                            </div>
                            <div className = "input-box">
                                <input type="password" required onChange={event => setContra(event.target.value)}/>
                                <label>Password</label>
                            </div>
                            <div className = "recordarme">
                                <label><input type="checkbox"/>Recordarme</label>
                                {/* <Link href="">Forgot Password</Link> */}
                            </div>
                            <button type="button" className="boton" onClick={submitForm}>Login</button>
                            
                            {/* {passStatus && (
                               <h1>Invalid Credentials</h1>
                            )} */}

                            <div className = "login-register">
                                {passStatus ? <h1 className="invalidCredentials">Invalid Credentials</h1> : null}
                                <p>No tenes cuenta? <Link to={'/register'} >Register</Link> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}