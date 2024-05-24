import React from 'react';
import {useNavigate} from "react-router-dom";
import {DISKROUTER, WHEELSROUTER} from "../utils/consts";

const ChooseSectionHome = () => {
    const navigate = useNavigate()
    return (
        <div className='default_wrapper d-flex justify-content-between align-items-center home_choose'>
            <div className='d-flex home_choose_wheels' onClick={() => navigate(WHEELSROUTER)}>
                <button className='align-self-end choose_btn mb-5 ms-4'>Шины</button>
            </div>
            <div className='home_choose_line'></div>
            <div className='d-flex home_choose_disk' onClick={() => navigate(DISKROUTER)}>
                <button className='align-self-end choose_btn mb-5 ms-4'>Диски</button>
            </div>
        </div>
    );
};

export default ChooseSectionHome;