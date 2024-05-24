import React, {useState} from 'react';

interface IProps {
    show: boolean,
    onShow(): void
}

const BurgerMenuItem = ({show, onShow}: IProps) => {


    return (
        <div className='me-1'>
            <div
                className={`burgerMenu ${show ? 'open' : ''}`}
                onClick={onShow}
            >
                <span></span>
            </div>
        </div>
    );
};

export default BurgerMenuItem;