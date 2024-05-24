import React, {FC} from 'react';
import ChooseSectionHome from "../components/ChooseSectionHome";
import './home.css'
import RecomendSection from "../components/RecomendSection";
import {observer} from "mobx-react-lite";
import SaleSection from "../components/SaleSection";
const Home: FC = () => {
    
    return (
        <div className='default_wrapper me-auto ms-auto'>
            <ChooseSectionHome/>
            <RecomendSection isProduct={false}/>
            <SaleSection/>
        </div>
    );
};

export default observer(Home);