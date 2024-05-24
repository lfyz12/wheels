import React, {useContext, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {WHEELSPRODUCT, WHEELSROUTER} from "../utils/consts";
import {Context} from "../index";
import {Button, Card} from "react-bootstrap";
import SnowIcon from "../components/icons/SnowIcon";
import ProductBasketIcon from "../components/icons/ProductBasketIcon";
import {TWheelItem} from "../models/WheelsResponse";
import './product.css'
import PlusArrow from "../components/icons/PlusArrow";
import MinusArrow from "../components/icons/MinusArrow";
import ProductMain from "../components/ProductMain";
import ProductDescription from "../components/ProductDescription";
import RecomendSection from "../components/RecomendSection";
const ProductPage = () => {
    const {wheelStore} = useContext(Context)
    const [wheelItem, setWheelItem] = useState<TWheelItem | null>(null)
    const {articul} = useParams()
    const location = useLocation()
    const [problem, setProblem] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const searchWheels = async () => {
        await wheelStore.searchOneWheel(articul!).then(res => setWheelItem(wheelStore.wheelsItem))
    }

    useEffect(() => {
        articul!.length > 0 && searchWheels()
    }, [articul]);

    return (
        <div className='default_wrapper ms-auto me-auto'>
            <ProductMain wheelItem={wheelItem}/>
            <ProductDescription wheelItem={wheelItem} path={location.pathname}/>
            <RecomendSection isProduct={true}/>
            {wheelItem && <div className='product_question_box d-flex flex-column align-items-start justify-content-start mt-4'>
                <h2 className='product_question_title'>Остались вопросы?</h2>
                <form className='product_form w-100 h-100 d-flex flex-column align-items-center justify-content-start'>
                    <textarea className='product_form_question product_form_input w-100 h-50 pt-3 mb-3' placeholder='Опишите свою проблему' value={problem} onChange={e => setProblem(e.target.value)}/>
                    <div className='product_form_input_group w-100 d-flex justify-content-between align-items-center mb-3'>
                    <input type='text' className='product_form_input h-100' placeholder='Имя' value={name} onChange={e => setName(e.target.value)}/>
                    <input type='text' className='product_form_input h-100' placeholder='Фамилия' value={lastName}
                           onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className='product_form_input_group d-flex justify-content-between align-items-center mb-4 w-100'>
                        <input type='text' className='product_form_input h-100' placeholder='Номер телефона' value={phone}
                               onChange={e => setPhone(e.target.value)}/>
                        <input type='text' className='product_form_input h-100' placeholder='Почта' value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button className='product_form_btn'>Оставить заявку</button>
                </form>
            </div>}
        </div>
    );
};

export default ProductPage;