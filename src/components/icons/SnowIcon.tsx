import React, {FC} from 'react';

type TProps = {
    isProduct: boolean
}

const SnowIcon:FC<TProps> = ({isProduct}: TProps) => {
    return (
        <svg className={isProduct ? 'snow_icon_product' : 'snow_icon'} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.9944 16.0012L8.88094 18.992L4.82766 17.1314L3.99561 18.9618L6.76174 20.2315L5.24022 21.1214L6.2305 22.859L7.75177 21.9693L7.45421 25.0305L9.43493 25.2156L9.87098 20.7298L14.9868 17.7376V23.7528L11.3669 26.3801L12.5417 27.9988L14.9868 26.2241V28H16.9868V26.224L19.4321 27.9988L20.6069 26.3801L16.9868 23.7527V17.7514L22.1141 20.7503L22.5502 25.2367L24.531 25.0515L24.2333 21.9898L25.7549 22.8798L26.7452 21.1422L25.2239 20.2523L27.9896 18.9828L27.1575 17.1525L23.1047 19.0128L17.9556 16.0012L23.0888 12.9988L27.1684 14.8715L28.0005 13.0412L25.208 11.7593L26.7472 10.859L25.757 9.12142L24.2471 10.0045L24.5419 6.97248L22.5611 6.78729L22.1279 11.244L16.9868 14.251V8.26755L20.6301 5.62327L19.4554 4.00466L16.9868 5.79629V4H14.9868V5.76246L12.565 4.00466L11.3902 5.62327L14.9868 8.23371V14.2648L9.88669 11.2818L9.44778 6.7665L7.46706 6.95168L7.76749 10.0423L6.2285 9.14217L5.23821 10.8798L6.74798 11.7628L4.00846 13.0204L4.84051 14.8507L8.86719 13.0023L13.9944 16.0012Z"
                  fill="url(#paint0_linear_264_686)"/>
            <defs>
                <linearGradient id="paint0_linear_264_686" x1="15.998" y1="4" x2="15.998" y2="28"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#007EFF"/>
                    <stop offset="1" stop-color="#D9E2F3"/>
                </linearGradient>
            </defs>
        </svg>

    );
};

export default SnowIcon;