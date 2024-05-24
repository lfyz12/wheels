import React, {useState} from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";
import {DISKROUTER, HOMEROUTER, WHEELSROUTER} from "../utils/consts";
const Navbar = () => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <div className='header_nav_menu w-100 d-flex justify-content-center align-items-center'>
            <div className='default_wrapper h-100 d-flex justify-content-around align-items-center '>
                <NavLink to={HOMEROUTER} className='text-decoration-none text-white'>Главная</NavLink>
                <div className='header_nav_dropdawn'>
                    <span onClick={() => setShow(!show)}>Каталог товаров</span>
                    <div className={`${show ? 'd-block' : 'd-none'} mt-2 header_nav_dropdawn_items`}>
                        <NavLink onClick={() => setShow(false)} className='text-decoration-none text-white' to={WHEELSROUTER}>Шины</NavLink>
                        <hr className='dropdawn_sep'/>
                        <NavLink to={DISKROUTER} onClick={() => setShow(false)} className='text-decoration-none text-white'>Диски</NavLink>
                    </div>
                </div>
                <span>Шиномонтаж</span>
                <span>О компании</span>
                <span>Контакты</span>
            </div>
        </div>
    );
};

export default Navbar;