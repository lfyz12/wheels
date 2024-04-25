import React, {FC, useEffect, useState} from 'react';
import './header.css'
// @ts-ignore
import logo from '../assets/logo.png'
import LocationIcon from "./icons/LocationIcon";
import PhoneIcon from "./icons/PhoneIcon";
import BasketIcon from "./icons/BasketIcon";
import ProfileIcon from "./icons/ProfileIcon";
import LogoutIcon from "./icons/LogoutIcon";
import BurgerMenuItem from "./icons/BurgerMenuItem";
const Header: FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const [show, setShow] = useState<boolean>(false)
    const onShow = () => {
        return show ? setShow(false) : setShow(true)
    }
    useEffect(() => {
        function checkSize() {
            window.addEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
            return width
        }

        checkSize()
    }, [width]);

    return (
        <div className='header d-flex flex-column align-items-center'>
            <div className='header_top_line w-100 d-flex justify-content-center align-items-center text-white'>
                <div className='default_wrapper h-100 d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <LocationIcon/> <span className='ms-2'>Казань</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <PhoneIcon/> <span className='ms-2'>+7-999-999-99-99</span>
                    </div>
                </div>
            </div>
            <div className='header_navbar w-100 d-flex justify-content-center align-items-center'>
                <div className='default_wrapper h-100 d-flex justify-content-between align-items-center'>
                    <img alt='Logo' src={logo} className='h-100 header_logo'/>
                    <div className='header_search_section d-flex align-items-center'>
                        <input type='search' placeholder='Введите название товара...' className='header_input h-100 ps-2'/>
                    </div>
                    {
                        width > 499 ?
                            <div className='h-100 d-flex justify-content-around align-items-center header_icons_box'>
                                <span className='ms-1'><BasketIcon/></span>
                                <span className='ms-1'><ProfileIcon/></span>
                                <span className='ms-1'><LogoutIcon/></span>
                            </div> :
                            <BurgerMenuItem/>
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;