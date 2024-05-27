import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useNavigate } from "react-router-dom";
import "../styles/LoginRegister.css"
import { sendRegisterForm } from "../utils/api/register";
import { sendCheckEmail } from "../utils/api/checkEmail";
import { useState, useEffect } from 'react'

export const Register = () => {
    
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [contra, setContra] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [enableButton, setEnableButton] = useState(false);
    const [emailExists, setEmailExists] = useState(false);

    const navigate = useNavigate() //Instanciar Navigate

    useEffect(() => {
        if (emailExists) return setEnableButton(false)
        if (!email.includes("@")) return setEnableButton(false)
        if (contra != repeatPassword) return setEnableButton(false)
        if (!dni) return setEnableButton(false)
        if (nombre == "") return setEnableButton(false)
        if (apellido == "") return setEnableButton(false)
        setEnableButton(true)
    }, [email, contra, repeatPassword, emailExists, dni, nombre, apellido])

    useEffect(() => {
        const checker = async () => {
            await checkEmailAPI({email})
        }
        checker() 
    }, [email])

    const checkEmailAPI = async () => {
        const response = await sendCheckEmail({email})
        
        if (response == 204) {
            setEmailExists(false)
            return
        }
        setEmailExists(true)
    }

    const submitForm = async () => {

        const response = await sendRegisterForm({email, nombre, apellido, dni, contra})

        if (response === false) return
        
        return navigate("/login")
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Base de Datos II | Register</title>
                </Helmet>
            </HelmetProvider>
            <main className="login-main">
                <div className="caja-form">
                    <div className="form">
                        <h2>Register</h2>
                        <form className="input-form">
                            <div className = "input-box">
                                <input type="text" required onChange={event => setEmail(event.target.value)}/>
                                <label>Email</label>
                            </div>
                            <div className = "input-box">
                                <input required onChange={event => setNombre(event.target.value)}/>
                                <label>Name</label>
                            </div>
                            <div className = "input-box">
                                <input required onChange={event => setApellido(event.target.value)}/>
                                <label>Surname</label>
                            </div>
                            <div className = "input-box">
                                <input required onChange={event => setDni(event.target.value)}/>
                                <label>DNI</label>
                            </div>
                            <div className = "input-box">
                                <input type="password" required onChange={event => setContra(event.target.value)}/>
                                <label>Password</label>
                            </div>
                            <div className = "input-box">
                                <input type="password" required onChange={event => setRepeatPassword(event.target.value)}/>
                                <label>Repeat Password</label>
                            </div>
                            <button type="button" className="boton" disabled={!enableButton} onClick={submitForm}>Register</button>
                            
                            <div className="errors">
                                {!enableButton && <h1 className="error">Error:</h1>}
                                {emailExists && <h1 className="error">{'> Email used'}</h1>}
                                {!email.includes("@") && <h1 className="error">{'> Mail in incorrect form'}.</h1>}
                                {!dni && <h1 className="error">{'> Invalid birthday'}</h1>}
                                {contra != repeatPassword && <h1 className="error">{'> Passwords do not match'}</h1>}
                                {(nombre == "" || apellido == "") && <h1 className="error">{'> Incomplete fields'}</h1>}
                            </div>
                            
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}
