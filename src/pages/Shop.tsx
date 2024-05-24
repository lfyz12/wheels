import React, {FC, useContext, useEffect} from 'react';
import SearchItemList from "../components/SearchItemList";
import WheelsList from "../components/WheelsList";
import {Context} from "../index";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useLocation} from "react-router-dom";
import {WHEELSROUTER} from "../utils/consts";
import './shop.css'
import Filters from "../components/Filters";

const Shop: FC = () => {
    const {wheelStore} = useContext(Context)
    const location = useLocation()
    const addWheels = async () => {
        await wheelStore.addWheels(wheelStore.totalCount, 'add', 'Диаметр (R)', 'Ширина профиля', 'Высота профиля', 'Сезон', 'Производитель', location.pathname === WHEELSROUTER ? 'Шины' : 'Диски')
    }



    return (
        <div className='default_wrapper me-auto ms-auto'>
            {wheelStore.wheelsList.length === 0 && <Filters/>}
            <h1 className='mt-3'>Каталог товаров</h1>
            {wheelStore.wheelsList.length > 0 ?
                <SearchItemList/> :
                <WheelsList/>}

            {wheelStore.wheelsList.length === 0 && <button onClick={addWheels} className='mt-2 shop_btn'>Показать еще</button>}
        </div>
    );
};

export default observer(Shop);