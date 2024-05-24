import React, {FC} from 'react';
import {TWheelItem} from "../models/WheelsResponse";
import {Button, Card} from "react-bootstrap";
import {DiskItemResponse, WheelsItemResponse} from "../models/WheelsItemResponse";
import SnowIcon from "./icons/SnowIcon";
import ProductBasketIcon from "./icons/ProductBasketIcon";
type TProps = {
    wheel: WheelsItemResponse | DiskItemResponse
    index: number
}
const SearchWheelItem: FC<TProps> = ({wheel, index}: TProps) => {

    return (
        <>
            {index > 0 ? <Card className='mt-5' style={{ width: '255px', height: '384px', borderRadius: '10px', border: 0}}>
                    <SnowIcon isProduct={false}/>
                    <Card.Img variant="top" src={process.env.REACT_APP_API_URL + 'media/' + wheel.img} className='w-100 h-50 p-2'/>
                    <Card.Body className='h-50 d-flex flex-column justify-content-between'>
                        <div>

                            <Card.Title className='wheel_card_title'>{wheel.name}</Card.Title>
                            <Card.Text className='wheel_card_text'>
                                {wheel.shirina}/{wheel.profil}/{wheel.diametr}
                            </Card.Text>
                        </div>
                        <Button className='wheel_card_btn d-flex justify-content-between align-items-center text-black'>{wheel.price} <ProductBasketIcon/></Button>
                    </Card.Body>
                </Card> :
                <Card className='mt-5 first_item_card' style={{ width: '255px', height: '384px', borderRadius: '10px', border: 0}}>
                    <SnowIcon isProduct={false}/>
                    <Card.Img variant="top" src={process.env.REACT_APP_API_URL + 'media/' + wheel.img} className='w-100 h-50 p-2'/>
                    <div className='first_item_line'></div>
                    <Card.Body className='h-50 d-flex flex-column justify-content-between'>
                        <Card.Title className='wheel_card_title first_item text-center'>{wheel.name}</Card.Title>
                        <Card.Text className='wheel_card_text first_item w-100 d-flex flex-wrap justify-content-between'>
                            <div className='first_item_param_box'><span className='first_item_param me-2 mb-1'>{wheel.shirina} </span> Lorem</div>
                            <div className='first_item_param_box'><span className='first_item_param me-2 mb-1'>{wheel.profil} </span> Lorem</div>
                            <div className='first_item_param_box'><span className='first_item_param me-2'>{wheel.diametr} </span> Lorem</div>
                        </Card.Text>
                        <Button className='wheel_card_btn d-flex justify-content-between align-items-center text-black'>{wheel.price} <ProductBasketIcon/></Button>
                    </Card.Body>
                    <Card.Text>{wheel.ostatok} шт.</Card.Text>
                </Card>}
        </>
    );
};

export default SearchWheelItem;