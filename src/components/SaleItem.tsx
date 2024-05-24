import React, {FC} from 'react';

type TProps = {
    img: string
    name: string
    text: string
    date: string
}

const SaleItem: FC<TProps> = ({img, name, text, date}: TProps) => {
    return (
        <div className='d-flex flex-column align-items-center sale_item'>
            <div  className={`w-100 h-50 ${img}`}></div>
            <div className='d-flex flex-column w-100 align-items-center justify-content-start'>
                <div className='d-flex w-100 justify-content-between align-items-center'><h2>{name}</h2> <span>{date}</span></div>
                <p>{text}</p>
            </div>

        </div>
    );
};

export default SaleItem;