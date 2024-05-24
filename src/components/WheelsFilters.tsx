import React, {useContext, useEffect, useState} from 'react';
import InformationIcon from "./icons/InformationIcon";
import DropdawnIcon from "./icons/dropdawnIcon";
import {Dropdown} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const WheelsFilters = () => {
    const {wheelStore} = useContext(Context)

    const [show, setShow] = useState<boolean>(false)

    const getFilters = async () => {
        await wheelStore.getFilters('Шины')
    }

    useEffect(() => {
        getFilters()
    }, []);

    return (
        <div className='default_wrapper filter_box d-flex justify-content-between align-items-center flex-wrap mt-3 mb-4'>
            <Dropdown >
                <Dropdown.Toggle className='d-flex justify-content-between align-items-center filter_item ps-1 pe-1 pt-1' id="dropdown-basic">
                    <InformationIcon titleText={' Посадочный диаметр шины - обозначение размера той части   покрышки, которая непосредственно соприкасается с диском. В обозначении   типоразмера диаметр указывается в дюймах, и перед этой цифрой часто стоит   буква R: 205/55 R16 (16 - диаметр в дюймах).'}/>
                    <span className='me-1'>Диаметр (R)</span> <DropdawnIcon/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {wheelStore.filtersList.diametr && wheelStore.filtersList.diametr.map((value: string) =>
                        <Dropdown.Item href={`#${value}`}>{value}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown >
                <Dropdown.Toggle className='d-flex justify-content-between align-items-center filter_item ps-1 pe-1 pt-1' id="dropdown-basic">
                    <InformationIcon titleText={'       Ширина шины - расстояние между двумя наружными сторонами боковых профилей накачанной шины. Никакие выпуклости на поверхности шины в расчёт не принимаются. \n' +
                        '       Ширина профиля легковой шины измеряется в мм, ширина грузовой - в дюймах, а ширина мотошины может указываться как в дюймах, так и в мм. В типоразмере ширина указана на первом месте: 205/55 R16 (205 - ширина в мм).\n' +
                        '       Чем шире покрышка, тем более уверенно автомобиль ведет себя при выполнении манёвров. Однако при движении в колее широкие шины ведут себя менее устойчиво. Кроме того, ширина шины прямо влияет на расход топлива: чем более узкой будет шина, тем меньше топлива потребляет авто.'}/>
                    <span className='me-1'>Ширина профиля</span> <DropdawnIcon/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {wheelStore.filtersList.diametr && wheelStore.filtersList.shirina.map((value: string) =>
                        <Dropdown.Item>{value}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown >
                <Dropdown.Toggle className='d-flex justify-content-between align-items-center filter_item ps-1 pe-1 pt-1' id="dropdown-basic">
                    <InformationIcon titleText={'  Профиль шины - расстояние по высоте шины от обода до покрышки с одной из боковых сторон. Покрышка должна быть накачанной.\n' +
                        '       Показатель профиля выражается в процентном соотношении к ширине. В типоразмере показатель профиля стоит на втором месте: 205/55 R16 (55 - профиль).\n' +
                        '       Чем меньше профиль, тем лучше показатели устойчивости и управляемости. На низкопрофильных шинах автомобиль быстрее тормозит и лучше входит в повороты. Высокий профиль положительно влияет на проходимость и плавность хода. Кроме   того, у высокопрофильной резины ресурс службы более долгий, чем у   низкопрофильной.'}/>
                    <span className='me-1'>Высота профиля</span> <DropdawnIcon/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {wheelStore.filtersList.diametr && wheelStore.filtersList.profil.map((value: string) =>
                        <Dropdown.Item>{value}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown >
                <Dropdown.Toggle className='d-flex justify-content-between align-items-center filter_item ps-1 pe-1 pt-1' id="dropdown-basic">
                    <span className='me-1'>Сезон</span> <DropdawnIcon/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {wheelStore.filtersList.diametr && wheelStore.filtersList.season!.map((value: string) =>
                        <Dropdown.Item>{value}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown >
                <Dropdown.Toggle className='d-flex justify-content-between align-items-center filter_item ps-1 pe-1 pt-1' id="dropdown-basic">
                    <span className='me-1'>Производитель</span> <DropdawnIcon/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {wheelStore.filtersList.diametr && wheelStore.filtersList.manufacturer.map((value: string) =>
                        <Dropdown.Item>{value}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            {/*<div onClick={() => setShow(!show)}*/}
            {/*     className='d-flex justify-content-between align-items-center filter_item ps-1 pe-1 pt-1'>*/}
            {/*    <InformationIcon titleText={' Посадочный диаметр шины - обозначение размера той части   покрышки, которая непосредственно соприкасается с диском. В обозначении   типоразмера диаметр указывается в дюймах, и перед этой цифрой часто стоит   буква R: 205/55 R16 (16 - диаметр в дюймах).'}/>*/}
            {/*    <span className='me-1'>Диаметр (R)</span> <DropdawnIcon/>*/}
            {/*</div>*/}

            {/*<div onClick={() => setShow(!show)}*/}
            {/*     className='d-flex justify-content-start align-items-center filter_item ps-1 pe-1 pt-1'>*/}
            {/*    <InformationIcon titleText={'       Ширина шины - расстояние между двумя наружными сторонами боковых профилей накачанной шины. Никакие выпуклости на поверхности шины в расчёт не принимаются. \n' +*/}
            {/*        '       Ширина профиля легковой шины измеряется в мм, ширина грузовой - в дюймах, а ширина мотошины может указываться как в дюймах, так и в мм. В типоразмере ширина указана на первом месте: 205/55 R16 (205 - ширина в мм).\n' +*/}
            {/*        '       Чем шире покрышка, тем более уверенно автомобиль ведет себя при выполнении манёвров. Однако при движении в колее широкие шины ведут себя менее устойчиво. Кроме того, ширина шины прямо влияет на расход топлива: чем более узкой будет шина, тем меньше топлива потребляет авто.'}/>*/}
            {/*    <span className='me-1'>Ширина профиля</span> <DropdawnIcon/>*/}
            {/*</div>*/}

            {/*<div onClick={() => setShow(!show)}*/}
            {/*     className='d-flex justify-content-start align-items-center filter_item ps-1 pe-1 pt-1'>*/}
            {/*    <InformationIcon titleText={'  Профиль шины - расстояние по высоте шины от обода до покрышки с одной из боковых сторон. Покрышка должна быть накачанной.\n' +*/}
            {/*        '       Показатель профиля выражается в процентном соотношении к ширине. В типоразмере показатель профиля стоит на втором месте: 205/55 R16 (55 - профиль).\n' +*/}
            {/*        '       Чем меньше профиль, тем лучше показатели устойчивости и управляемости. На низкопрофильных шинах автомобиль быстрее тормозит и лучше входит в повороты. Высокий профиль положительно влияет на проходимость и плавность хода. Кроме   того, у высокопрофильной резины ресурс службы более долгий, чем у   низкопрофильной.'}/>*/}
            {/*    <span className='me-1'>Высота профиля</span> <DropdawnIcon/>*/}
            {/*</div>*/}

            {/*<div onClick={() => setShow(!show)}*/}
            {/*     className='d-flex justify-content-start align-items-center filter_item ps-2 pe-2'>*/}
            {/*    <span className='me-1'>Сезон</span> <DropdawnIcon/>*/}
            {/*</div>*/}

            {/*<div onClick={() => setShow(!show)}*/}
            {/*     className='d-flex justify-content-start align-items-center filter_item ps-2 pe-2'>*/}
            {/*    <span className='me-1'>Производитель</span> <DropdawnIcon/>*/}
            {/*</div>*/}

            <button className='filter_btn'>
                Найти
            </button>
        </div>
    );
};

export default observer(WheelsFilters);