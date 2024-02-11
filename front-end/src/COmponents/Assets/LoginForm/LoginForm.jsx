import React from 'react';
import './LoginForm.css';
import { FaRegUserCircle, FaLock } from "react-icons/fa";

const LoginForm = () =>{
    return (
        <div className={'LoginForm'}>
            <div className={'Top'}>
                <h1>Welcome to Lifetrack!</h1>
                <p>"I am a random quote everyday to give you motivation." = Person McPerson</p>
            </div>
            <div className={'wrapper'}>
                <form action={""} >
                    <h1>Login</h1>
                    <div className={'inputBox'}>
                        <FaRegUserCircle className="icon"/> Username: <input type={"text"} placeholder={'  Username'} required/>

                    </div>
                    <div className={'inputBox'}>
                        <FaLock className="icon"/>     Password: <input type={"password"} placeholder={'  Password'} required/>

                    </div>

                    <button type={"submit"}>Login</button>

                    <div className={'register-link'}>
                        <p>Don't have an account? <a href={"#"}>Sign up </a></p>
                    </div>

                    <div className='remember-forget'>
                        <label><input type="checkbox"/>Remember Me</label>
                        <a href="#"> Forgot password</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;