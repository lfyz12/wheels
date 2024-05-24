import React, {JSXElementConstructor, ReactElement, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {DISKROUTER, LOGINROUTER, REGROUTER, WHEELSROUTER} from "../utils/consts";


const HeaderPath = () => {
    const location = useLocation()
    // const [pathDictioanary, setPathDictioanary] = useState({
    //
    // })
    const checkLocation = () => {
        switch (location.pathname) {
            case WHEELSROUTER:
                return <div className='default_wrapper header_path text-center pt-3'>
                    <span className='me-4'>Главная</span>
                    <span className='me-4'>/</span>
                    <span className='me-4'>Каталог товаров</span>
                    <span className='me-4'>/</span>
                    <span>Шины</span>
                </div>
            case DISKROUTER:
                return <div className='default_wrapper header_path text-center pt-3'>
                    <span className='me-4'>Главная</span>
                    <span className='me-4'>/</span>
                    <span className='me-4'>Каталог товаров</span>
                    <span className='me-4'>/</span>
                    <span>Диски</span>
                </div>
            case REGROUTER:
                return <div className='default_wrapper header_path text-center pt-3'>
                    <span className='me-4'>Главная</span>
                    <span className='me-4'>/</span>
                    <span>Регистрация</span>
                </div>
            case LOGINROUTER:
                return <div className='default_wrapper header_path text-center pt-3'>
                    <span className='me-4'>Главная</span>
                    <span className='me-4'>/</span>
                    <span className='me-4'>Вход в личный кабинет</span>
                </div>
        }
    }

    // useEffect(() => {
    //     checkLocation()
    // }, [location.pathname]);
    return (
        <>
            {checkLocation()}
        </>
    )
};

export default HeaderPath;