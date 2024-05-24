import React, {useEffect, useState} from 'react';
import { Form } from 'react-bootstrap';
import {NavLink, useLocation} from "react-router-dom";
import {LOGINROUTER, REGROUTER} from "../utils/consts";
import './auth.css'
import {login} from "../service/Userervice";
const Auth = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [isLogin, setIsLogin] = useState<boolean>(true)

    const logUser = async () => {
        await login(email, password).then(res => console.log(res))
    }

    const location = useLocation()
    const checkLogin = () => location.pathname === LOGINROUTER ? setIsLogin(true) : setIsLogin(false)

    useEffect(() => {
        checkLogin()
    }, [location.pathname]);

    return (
        <div className='auth_wrapper'>
            <Form className='default_wrapper auth_content d-flex flex-column justify-content-center align-items-center'>
                <div className='auth_input_box'>
                    <label className='mb-2'>E-mail</label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} className='auth_input w-100 h-50'/>
                </div>
                <div className='auth_input_box'>
                    <label className='mb-2'>Пароль</label>
                    <Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} className='auth_input w-100 h-50'/>
                </div>
                {
                    !isLogin &&
                    <div className='auth_input_box'>
                        <label className='mb-2'>Повторите пароль</label>
                        <Form.Control type='password' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} className='auth_input w-100 h-50'/>
                    </div>
                }
                <button className='auth_btn p-3 pe-5 ps-5 mt-3' onClick={logUser}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
                <hr/>
                {isLogin ?
                    <p className='auth_text'>
                        Нет учетной записи? Создайте ее <NavLink className='text-black' to={REGROUTER}>здесь</NavLink>
                    </p> :
                    <p className='auth_text'>
                        Уже есть учетная запись? <NavLink className='text-black' to={LOGINROUTER}>Войти</NavLink>
                    </p>}
            </Form>
        </div>
    );
};

export default Auth;