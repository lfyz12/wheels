import React, {FC} from 'react';

type TProps = {
    show?: boolean
}

const HeaderMenu: FC<TProps> = ({show}: TProps) => {



    return (
        <div className='w-100 h-100'>
            <div className='w-100 h-25 d-flex flex-column justify-content-around align-items-center'>
                <span>Профиль</span>
                <span>Корзина</span>
                <span>Выйти</span>
            </div>
        </div>
    );
};

export default HeaderMenu;