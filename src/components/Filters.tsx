import React, {useContext, useEffect, useState} from 'react';
import DropdawnIcon from "./icons/dropdawnIcon";
import InformationIcon from "./icons/InformationIcon";
import './filters.css'
import FiltersCheckBox from "./FiltersCheckBox";
import WheelsFilters from "./WheelsFilters";
import {useLocation} from "react-router-dom";
import {WHEELSROUTER} from "../utils/consts";
import DiskFilters from "./DiskFilters";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import {Context} from "../index";
const Filters = () => {

    const [isWheels, setIsWheels] = useState<boolean>(false)
    const location = useLocation()
    const checkRender = () => location.pathname === WHEELSROUTER ? setIsWheels(true) : setIsWheels(false)



    useEffect(() => {
        checkRender()
    }, [location.pathname]);
    return (
        <>
            {isWheels ? <WheelsFilters/> : <DiskFilters/>}
        </>
    );
};

export default Filters;