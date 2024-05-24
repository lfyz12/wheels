import React, {FC, useContext, useEffect, useState} from 'react';
import './header.css'
// @ts-ignore
import logo from '../assets/logo.png'
import LocationIcon from "./icons/LocationIcon";
import PhoneIcon from "./icons/PhoneIcon";
import BasketIcon from "./icons/BasketIcon";
import ProfileIcon from "./icons/ProfileIcon";
import LogoutIcon from "./icons/LogoutIcon";
import BurgerMenuItem from "./icons/BurgerMenuItem";
import HeaderMenu from "./HeaderMenu";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Navbar from "./Navbar";
import HeaderPath from "./HeaderPath";
import {useNavigate} from "react-router-dom";
import {WHEELSROUTER} from "../utils/consts";
const Header: FC = () => {
    const {wheelStore} = useContext(Context)

    const [width, setWidth] = useState<number>(window.innerWidth)
    const [show, setShow] = useState<boolean>(false)
    const [searchText, setSearchText] = useState<string>('')
    const navigation = useNavigate()
    const onShow = () => {
        return show ? setShow(false) : setShow(true)
    }

    const searchWheels = async () => {
        await wheelStore.searchWheels(searchText)
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

    useEffect(() => {
        searchText.length > 0 && searchWheels()
    }, [searchText]);

    useEffect(() => {
        if (width > 499) {
            setShow(false)
        }
    }, [width]);

    return (
        <div className='header d-flex flex-column align-items-center'>
            <HeaderMenu show={show}/>
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
                        <input type='search' placeholder='Введите название товара...' value={searchText}
                               onChange={e => {
                                   setSearchText(e.target.value)
                                   e.target.value === '' && wheelStore.setWheelsList([])
                                   navigation(WHEELSROUTER)
                               }} className='header_input h-100 ps-2'/>
                    </div>
                    {
                        width > 499 ?
                            <div className='h-100 d-flex justify-content-around align-items-center header_icons_box'>
                                <span className='ms-1'><BasketIcon/></span>
                                <span className='ms-1'><ProfileIcon/></span>
                                <span className='ms-1'><LogoutIcon/></span>
                            </div> :
                            <BurgerMenuItem show={show} onShow={onShow}/>
                    }

                </div>
            </div>
            <Navbar/>
            <HeaderPath/>
        </div>
    );
};

export default observer(Header);