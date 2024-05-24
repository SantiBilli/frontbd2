import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useNavigate } from "react-router-dom";
import "../styles/LoginRegister.css"
import { sendRegisterForm } from "../utils/api/register";
// import { sendCheckEmail } from "../utils/api/checkEmail";
import { useState, useEffect } from 'react'

export const Register = () => {
    
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthday, setBirthday] = useState(null); //Date termina de ser null cauando esta completa /año
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [enableButton, setEnableButton] = useState(false);
    const [emailExists, setEmailExists] = useState(false);

    const navigate = useNavigate() //Instanciar Navigate

    useEffect(() => {
        if (emailExists) return setEnableButton(false)
        if (!mail.includes("@")) return setEnableButton(false)
        if (password != repeatPassword) return setEnableButton(false)
        if (!birthday) return setEnableButton(false)
        if (name == "") return setEnableButton(false)
        if (surname == "") return setEnableButton(false)
        setEnableButton(true)
    }, [mail, password, repeatPassword, emailExists, birthday, name, surname])

    useEffect(() => {
        const checker = async () => {
            await checkEmailAPI({mail})
        }
        checker() 
    }, [mail])

    const checkEmailAPI = async () => {
        const response = await sendCheckEmail({mail})
        if (response == 204) {
            setEmailExists(false)
            return
        }
        setEmailExists(true)
    }

    const submitForm = async () => {
        const response = await sendRegisterForm({mail, name, surname, birthday, password})
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
                                <input type="text" required onChange={event => setMail(event.target.value)}/>
                                <label>Email</label>
                            </div>
                            <div className = "input-box">
                                <input required onChange={event => setName(event.target.value)}/>
                                <label>Name</label>
                            </div>
                            <div className = "input-box">
                                <input required onChange={event => setSurname(event.target.value)}/>
                                <label>Surname</label>
                            </div>
                            <div className = "input-box">
                                <input type="date" required onChange={event => setBirthday(event.target.value)}/>
                                <label>Birthday</label>
                            </div>
                            <div className = "input-box">
                                <input type="password" required onChange={event => setPassword(event.target.value)}/>
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
                                {!mail.includes("@") && <h1 className="error">{'> Mail in incorrect form'}.</h1>}
                                {!birthday && <h1 className="error">{'> Invalid birthday'}</h1>}
                                {password != repeatPassword && <h1 className="error">{'> Passwords do not match'}</h1>}
                                {(name == "" || surname == "") && <h1 className="error">{'> Incomplete fields'}</h1>}
                            </div>
                            
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}
