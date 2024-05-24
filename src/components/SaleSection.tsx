import React, {useState} from 'react';
import SaleItem from "./SaleItem";

const SaleSection = () => {
    const [name, setName] = useState('Заголовок')
    const [text, setText] = useState('Покупайте 2 шины, третья в подарок')
    const [date, setDate] = useState('15/01/2024')
    return (
        <div className='d-flex flex-column justify-content-start w-100 align-items-center mt-4 sale_section'>
            <h1 className='align-self-start mb-4'>Акции</h1>
            <div className='w-100 d-flex justify-content-between align-items-center'>
                <SaleItem img={'sale_one'} name={name} text={text} date={date}/>
                <SaleItem img={'sale_two'} name={name} text={text} date={date}/>
                <SaleItem img={'sale_three'} name={name} text={text} date={date}/>
            </div>
        </div>
    );
};

export default SaleSection;