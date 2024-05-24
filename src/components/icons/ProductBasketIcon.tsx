import React, {FC} from 'react';

type TProps = {
    white?: string
}

const ProductBasketIcon:FC<TProps> = ({white}: TProps) => {
    return (
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.5 18.1602C8.32843 18.1602 9 17.6181 9 16.9495C9 16.2809 8.32843 15.7388 7.5 15.7388C6.67157 15.7388 6 16.2809 6 16.9495C6 17.6181 6.67157 18.1602 7.5 18.1602Z"
                fill={white ? white : '#222831'}/>
            <path
                d="M18 18.1602C18.8284 18.1602 19.5 17.6181 19.5 16.9495C19.5 16.2809 18.8284 15.7388 18 15.7388C17.1716 15.7388 16.5 16.2809 16.5 16.9495C16.5 17.6181 17.1716 18.1602 18 18.1602Z"
                fill={white ? white : '#222831'}/>
            <path
                d="M21 4.23733H4.365L3.75 1.69491C3.71494 1.55612 3.62068 1.43164 3.48364 1.34316C3.3466 1.25467 3.17546 1.20778 3 1.21063H0V2.42131H2.385L5.25 14.0438C5.28506 14.1826 5.37932 14.3071 5.51636 14.3956C5.6534 14.4841 5.82454 14.531 6 14.5281H19.5V13.3174H6.615L6 10.8961H19.5C19.6734 10.8995 19.8429 10.8543 19.9796 10.7682C20.1163 10.6821 20.2119 10.5605 20.25 10.4239L21.75 4.97585C21.7751 4.88603 21.7745 4.79277 21.7483 4.70316C21.722 4.61355 21.6708 4.52996 21.5985 4.45875C21.5261 4.38753 21.4347 4.33058 21.3309 4.29221C21.2272 4.25384 21.114 4.23507 21 4.23733ZM18.9 9.68539H5.715L4.665 5.44801H20.0625L18.9 9.68539Z"
                fill={white ? white : '#222831'}/>
        </svg>

    );
};

export default ProductBasketIcon;