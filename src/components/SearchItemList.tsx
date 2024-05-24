import React, {useContext, useState} from 'react';
import {Context} from "../index";
import SearchWheelItem from "./SearchWheelItem";
import {observer} from "mobx-react-lite";

const SearchItemList = () => {
    const {wheelStore} = useContext(Context)

    return (
        <div className='w-100 d-flex justify-content-between align-items-center flex-wrap'>
            {wheelStore.wheelsList.length > 0 && wheelStore.wheelsList.map((wheel, index) =>
                <SearchWheelItem wheel={wheel} index={index}/>)
            }
        </div>
    );
};

export default observer(SearchItemList);