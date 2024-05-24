import React, {useState} from 'react';
import InformationIcon from "./icons/InformationIcon";
import DropdawnIcon from "./icons/dropdawnIcon";

const DiskFilters = () => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <div className='default_wrapper filter_box d-flex justify-content-between align-items-center flex-wrap mt-3 mb-4'>
            <div className='d-flex justify-content-between align-items-center w-100 h-50'>
                <div onClick={() => setShow(!show)}
                     className='d-flex justify-content-between align-items-center filter_item ps-1 pe-1 pt-1'>
                    <InformationIcon titleText={' Диаметр   диска (D) - показатель размера посадочного обода, предназначенного для   покрышки. Измеряется в дюймах. \n' +
                        '       На автомобиль можно установить диски разных   диаметров при соответствии размера шины (высокопрофильная или низкопрофильная   резина), однако внешний размер колеса не должен меняться.'}/>
                    <span className='me-2'>Диаметр (D)</span> <DropdawnIcon/>
                </div>

                <div onClick={() => setShow(!show)}
                     className='d-flex justify-content-start align-items-center filter_item ps-1 pe-1 pt-1'>
                    <InformationIcon titleText={'Ширина   диска — это один из основных параметров, который указывается в дюймах и   обозначается буквой «J».\n' +
                        '       Например, если на диске указан индекс «5,5J», то его ширина составляет 5,5   дюймов.\n' +
                        '       Автопроизводители указывают допустимую ширину диска для каждой модели   автомобиля. Этот параметр оказывает прямое влияние на геометрические   характеристики авто.\n' +
                        '       Также ширину диска нужно знать при подборе покрышек: на относительно   широкий диск не получится надеть менее широкую шину.'}/>
                    <span className='me-2'>Ширина</span> <DropdawnIcon/>
                </div>

                <div onClick={() => setShow(!show)}
                     className='d-flex justify-content-start align-items-center filter_item ps-1 pe-1 pt-1'>
                    <InformationIcon titleText={' Показатель расположения крепёжных отверстий обозначается, например, как PCD 5/112, где 5 - количество отверстий.Количество отверстий может варьироваться от 4 до 6.'}/>
                    <span className='me-2'>Тип диска</span> <DropdawnIcon/>
                </div>

                <div onClick={() => setShow(!show)}
                     className='d-flex justify-content-start align-items-center filter_item ps-1 pe-1 pt-1'>
                    <InformationIcon titleText={'  PCD   (Pitch Circle Diameter) - это диаметр окружности, по которой расположены   болты или гайки, удерживающие диск на ступице. Также этот параметр может   называться "расположение крепёжных отверстий",   "разболтовка", "рассверловка". Измеряется в мм. \n' +
                        '       Показатель расположения крепёжных отверстий обозначается, например, как PCD   5/112, где 5 - количество отверстий, 112 - диаметр окружности, на которой   расположены отверстия. Соответствие размеров диска и ступицы должно быть точным, и установка диска с меньшим или большим диаметром не допускается. Количество отверстий может варьироваться от 4 до 6.'}/>
                    <span className='me-2'>PCD</span> <DropdawnIcon/>
                </div>

                <div onClick={() => setShow(!show)}
                     className='d-flex justify-content-start align-items-center filter_item ps-1 pe-1 pt-1'>
                    <InformationIcon titleText={'       Вылет   диска (ЕТ) - расстояние между ступицей колеса и центром поперечного сечения   диска. Измеряется в мм. Вылет диска может иметь положительное, нулевое или   отрицательное значение.\n' +
                        '       При положительном вылете привалочная плоскость диска   находится за центральной плоскостью колеса. При отрицательном - привалочная плоскость находится перед центральной плоскостью. При нулевом - центральная   плоскость собственно колеса и привалочная плоскость совпадают.'}/>
                    <span className='me-2'>ET</span> <DropdawnIcon/>
                </div>

                <div onClick={() => setShow(!show)}
                     className='d-flex justify-content-start align-items-center filter_item ps-1 pe-1 pt-1'>
                    <InformationIcon titleText={' DIA - диаметр центрального отверстия автомобильного диска. Замеряется со стороны привалочной плоскости. Измеряется в мм.'}/>
                    <span className='me-2'>DIA</span> <DropdawnIcon/>
                </div>

                <button className='filter_btn'>
                    Найти
                </button>
            </div>

            <div className='d-flex justify-content-between align-items-center disk_filter_box h-50'>
                <div onClick={() => setShow(!show)}
                     className='d-flex justify-content-start align-items-center filter_item ps-2 pe-2'>
                    <span className='me-1'>Производитель</span> <DropdawnIcon/>
                </div>

                <div onClick={() => setShow(!show)}
                     className='d-flex justify-content-start align-items-center filter_item ps-2 pe-2'>
                    <span className='me-1'>Модель</span> <DropdawnIcon/>
                </div>

                <div onClick={() => setShow(!show)}
                     className='d-flex justify-content-start align-items-center filter_item ps-2 pe-2'>
                    <span className='me-1'>Цвет</span> <DropdawnIcon/>
                </div>
            </div>


            <div className='information_text'>
                <p>
                    Ширина шины - расстояние между двумя наружными сторонами боковых профилей накачанной шины. Никакие
                    выпуклости на поверхности шины в расчёт не принимаются.
                    Ширина профиля легковой шины измеряется в мм, ширина грузовой - в дюймах, а ширина мотошины может
                    указываться как в дюймах, так и в мм. В типоразмере ширина указана на первом месте: 205/55 R16 (205
                    - ширина в мм).
                    Чем шире покрышка, тем более уверенно автомобиль ведет себя при выполнении манёвров. Однако при
                    движении в колее широкие шины ведут себя менее устойчиво. Кроме того, ширина шины прямо влияет на
                    расход топлива: чем более узкой будет шина, тем меньше топлива потребляет авто.
                </p>
            </div>
        </div>
    );
};

export default DiskFilters;