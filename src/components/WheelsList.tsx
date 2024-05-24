import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import SearchWheelItem from "./SearchWheelItem";
import WheelItem from "./WheelItem";
import {observer} from "mobx-react-lite";
import {useLocation} from "react-router-dom";
import {WHEELSROUTER} from "../utils/consts";

const WheelsList = () => {
    const {wheelStore} = useContext(Context)
    const location = useLocation()
    const getWheels = async () => {
        await wheelStore.newWheels(3, 'add', 'Диаметр (R)', 'Ширина профиля', 'Высота профиля', 'Сезон', 'Производитель', location.pathname === WHEELSROUTER ? 'Шины' : 'Диски')
    }



    useEffect(() => {
        getWheels()
    }, [location.pathname]);

    return (
        <div className='w-100 d-flex justify-content-between align-items-center flex-wrap'>
            {wheelStore.newWheelsList.length > 0 && wheelStore.newWheelsList.map((wheel, index) =>
                <WheelItem wheel={wheel} index={index}/>)
            }
        </div>
    );
};

export default observer(WheelsList);