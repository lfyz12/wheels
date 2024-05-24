import React, {FC, useContext, useEffect, useState} from 'react';
import SnowIcon from "./icons/SnowIcon";
import PlusArrow from "./icons/PlusArrow";
import MinusArrow from "./icons/MinusArrow";
import ProductBasketIcon from "./icons/ProductBasketIcon";
import {useParams} from "react-router-dom";
import {Context} from "../index";
import {TWheelItem} from "../models/WheelsResponse";

type TProps = {
    wheelItem: TWheelItem | null
}

const ProductMain:FC<TProps> = ({wheelItem}: TProps) => {
    const {wheelStore} = useContext(Context)
    const [count, setCount] = useState<string>('4')
    const {articul} = useParams()

    const addToBasket = async () => {
        await wheelStore.addProductToBasket(wheelItem!.id)
    }

    useEffect(() => {
        function checkOstatok() {
            if (4 > +wheelItem!.ostatok) {
                setCount(wheelItem!.ostatok)
            }
        }

        wheelItem && checkOstatok()
    }, [wheelItem]);
    const plus = () => {
        +count < +wheelItem!.ostatok && setCount((+count + 1) + '')
    }
    const minus = () => {
        +count > 0 && setCount((+count - 1) + '')
    }
    return (
        <div>
            {wheelItem && <div className='mt-5 h-100 d-flex justify-content-around align-items-center product_page_main'>
                <div className='w-50 h-100 p-4 product_img'>
                    <SnowIcon isProduct={true}/>
                    <img alt='img' src={process.env.REACT_APP_API_URL + 'media/' + wheelItem.img} className='w-100 h-100 '/>
                </div>
                <div className='w-50 h-100 d-flex flex-column justify-content-start ms-4'>
                    <h1 className='product_title'>{wheelItem.name}</h1>
                    <div className='product_main_info w-100 d-flex justify-content-start'>
                        <span>{wheelItem.shirina}/</span>
                        <span className='ms-2'>{wheelItem.profil}/</span>
                        <span className='ms-2'>{wheelItem.diametr}</span>
                    </div>
                    <div className='product_price_info d-flex justify-content-start align-items-center w-50'>
                        <div className='d-flex flex-column'>
                            <span className='product_price_text'>Цена за шт:</span>
                            <span className='product_price'>{wheelItem.price} <span
                                className='product_price_valut'>руб.</span></span>
                        </div>
                        <div className='d-flex justify-content-center ms-3 product_count_box'>
                            <input type='text' className='product_count_input' value={count}
                                   onChange={e => setCount(e.target.value)}/>
                            <div
                                className='d-flex flex-column justify-content-center align-items-center product_count_btns'>
                                <button onClick={plus}
                                        className='h-50 w-100 d-flex justify-content-center align-items-center product_count_btn plus'>
                                    <PlusArrow/></button>
                                <button onClick={minus}
                                        className='h-50 w-100 d-flex justify-content-center align-items-center product_count_btn minus'>
                                    <MinusArrow/></button>
                            </div>
                        </div>

                    </div>
                    <div className='product_ostatok'>
                        Осталось {wheelItem.ostatok} шт.
                    </div>

                    <div className='product_btns mt-4'>
                        <button
                            onClick={addToBasket}
                            className='product_basket_btn d-flex justify-content-center align-items-center product_page_btn'>
                            <ProductBasketIcon white={'#ffffff'}/> <span className='ms-2'>Добавить в корзину</span>
                        </button>
                        <button className='product_buy_btn product_page_btn'>Купить</button>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ProductMain;