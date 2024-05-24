import React, {FC} from 'react';
import {TWheelItem} from "../models/WheelsResponse";

type TProps = {
    wheelItem: TWheelItem | null
    path: string
}

const ProductDescription:FC<TProps> = ({wheelItem, path}: TProps) => {
    return (
        <div>
            {wheelItem && <div className='product_description_box w-100 d-flex justify-content-center align-items-center'>
                <div className='product_description_info d-flex flex-column justify-content-around align-items-start w-50 h-100'>
                    <div className='product_desc_stats w-100'>
                        <h2 className='product_desc_stats_title'>Характеристики:</h2>
                        <div className='product_stats_list w-100 mt-4'>
                            <div className='product_list_item mb-2 d-flex justify-content-start align-items-center'>
                                <div className='product_list_mark me-3'></div>
                                Lorem ipsum
                            </div>
                            <div className='product_list_item mb-2 d-flex justify-content-start align-items-center'>
                                <div className='product_list_mark me-3'></div>
                                Lorem ipsum
                            </div>
                            <div className='product_list_item mb-2 d-flex justify-content-start align-items-center'>
                                <div className='product_list_mark me-3'></div>
                                Lorem ipsum
                            </div>
                            <div className='product_list_item mb-2 d-flex justify-content-start align-items-center'>
                                <div className='product_list_mark me-3'></div>
                                Lorem ipsum
                            </div>
                        </div>
                    </div>
                    <div className='product_desc'>
                        <h2 className='product_desc_title'>Описание:</h2>
                        <p className='product_desc_text'>
                            Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum
                        </p>
                    </div>
                </div>
                <div className='tech_stats_box w-50 h-100 d-flex flex-column justify-content-between align-items-start'>
                    <h2 className='tech_stat_title'>Техническая информация:</h2>
                    <div className='stats_item d-flex w-100 justify-content-between align-items-center'>
                        <h3 className='stat_name'>Код товара</h3>
                        <span className='current_stat'>{wheelItem.articul}</span>
                    </div>
                    <div className='stats_item d-flex w-100 justify-content-between align-items-center'>
                        <h3 className='stat_name'>Ширина профиля</h3>
                        <span className='current_stat'>{wheelItem.shirina}</span>
                    </div>
                    {/wheel/.test(path) ?
                        <div className='stats_item d-flex w-100 justify-content-between align-items-center'>
                            <h3 className='stat_name'>Высота профиля</h3>
                            <span className='current_stat'>{wheelItem.profil}</span>
                        </div> :
                        <div className='stats_item d-flex w-100 justify-content-between align-items-center'>
                            <h3 className='stat_name'>ET</h3>
                            <span className='current_stat'>{wheelItem.et}</span>
                        </div>}
                    <div className='stats_item d-flex w-100 justify-content-between align-items-center'>
                        <h3 className='stat_name'>Диаметр</h3>
                        <span className='current_stat'>{wheelItem.diametr}</span>
                    </div>
                    {/wheel/.test(path) ? <div className='stats_item d-flex w-100 justify-content-between align-items-center'>
                        <h3 className='stat_name'>Сезон</h3>
                        <span className='current_stat'>{wheelItem.season}</span>
                    </div>:
                        <div className='stats_item d-flex w-100 justify-content-between align-items-center'>
                            <h3 className='stat_name'>DIA</h3>
                            <span className='current_stat'>{wheelItem.dia}</span>
                        </div>}
                    <div className='stats_item d-flex w-100 justify-content-between align-items-start'>
                        <h3 className='stat_name'>Производитель</h3>
                        <span className='current_stat'>{wheelItem.manufacturer}</span>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ProductDescription;