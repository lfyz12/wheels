import React, {FC} from 'react';
import './footer.css'
// @ts-ignore
import logo from "../assets/logo.png";
import PhoneIconFooter from "./icons/PhoneIconFooter";
import LocationIconFooter from "./icons/LocationIconFooter";
import EmailIconFooter from "./icons/EmailIconFooter";
const Footer: FC = () => {
    return (
        <div className='footer mt-5'>

            <div className='footer_wrapper h-100 d-flex justify-content-between align-items-center m-auto'>

                <div className='footer_logo_box mt-5 d-flex flex-column justify-content-start align-items-start'>
                    <img alt='Logo' src={logo} className='footer_logo mb-4'/>
                    <p className='mt-2'>
                        Lorem ipsum simple text Lorem ipsum simple text Lorem ipsum simple text Lorem ipsum simple text Lorem ipsum s
                    </p>
                </div>

                <div className='footer_info_box mt-4 d-flex flex-column justify-content-start align-items-center'>
                    <h2>О КОМПАНИИ</h2>
                    <div className='w-100 d-flex justify-content-around mt-5 footer_info_content_box'>

                        <div className='footer_info_content d-flex h-50 justify-content-start mt-3'>
                            <div className='footer_info_line me-4'></div>
                            <div className='d-flex flex-column h-100 justify-content-around align-items-start mt-3'>
                                <span className='mb-2'>Доставка</span>
                                <span className='mb-2'>Оплата</span>
                                <span className='mb-2'>Контакты</span>
                                <span>Возврат</span>
                            </div>

                        </div>

                        <div className='footer_info_content d-flex h-50 justify-content-start mt-3'>
                            <div className='footer_info_line me-4'></div>
                            <div className='d-flex flex-column h-100 justify-content-around align-items-start mt-3'>
                                <span className='mb-2'>Доставка</span>
                                <span className='mb-2'>Оплата</span>
                                <span className='mb-2'>Контакты</span>
                                <span>Возврат</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='footer_contact_box d-flex flex-column align-items-center ps-5 mt-5'>
                    <h2 className='mb-5'>КОНТАКТЫ</h2>

                    <div className='d-flex w-75 justify-content-start align-items-center footer_contact_item'>
                        <LocationIconFooter/>
                        <p className='ms-2 mb-0'>г. Казань, ул. Максима Горького, 10</p>
                    </div>

                    <div className='d-flex w-75 justify-content-between align-items-center footer_contact_item'>
                        <PhoneIconFooter/>
                        <p className='mb-0'>(812) 444-33-11</p>
                    </div>

                    <div className='d-flex w-75 justify-content-between align-items-center footer_contact_item'>
                        <EmailIconFooter/>
                        <p className='mb-0'>shop@mail.ru</p>
                    </div>

                    <span className='ms-4'>Оставайтесь с нами</span>
                </div>

            </div>
        </div>
    );
};

export default Footer;