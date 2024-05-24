import React, {FC, useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import WheelItem from "./WheelItem";
import Togle from "./Togle";
import {observer} from "mobx-react-lite";

type TPops = {
    isProduct: boolean
}

const RecomendSection:FC<TPops> = ({isProduct}:TPops) => {
    const {wheelStore} = useContext(Context)
    const [toggleState, setToggleState] = useState<boolean>(false)
    const switchToggle = () => setToggleState(!toggleState)
    const getWheels = async () => {
        await wheelStore.newWheels(3, 'add', 'Диаметр (R)', 'Ширина профиля', 'Высота профиля', 'Сезон', 'Производитель', toggleState ? 'Шины' : 'Диски')
    }

    useEffect(() => {
        getWheels()
    }, [toggleState]);

    return (
        <div className='w-100 d-flex justify-content-between align-items-center flex-wrap mt-5'>
            <div className='w-100 d-flex justify-content-between align-items-center mb-2'><h2>{isProduct ? 'Похожие товары' : 'Рекомандуемые товары'}</h2> {!isProduct && <Togle toggleState={toggleState} toggleSwitch={switchToggle}/>}</div>
            {wheelStore.newWheelsList.length > 0 && wheelStore.newWheelsList.map((wheel, index) =>
               index <= 3 && <WheelItem wheel={wheel} index={index}/>)
            }
        </div>
    );
};

export default observer(RecomendSection);