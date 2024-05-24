import React, {FC} from 'react';
import './toggle.css'
type TProps = {
    toggleState: boolean
    toggleSwitch: () => void
}
const Togle:FC<TProps> = ({toggleState, toggleSwitch}: TProps) => {
    return (
        <div className='toggle_box d-flex ms-auto'>
            <div onClick={toggleSwitch} className='switch'>
                <div className={`toggle ${toggleState ? 'wheels' : 'disk'}`}></div>
                <div className='names'>
                    <p className={`${!toggleState && 'wheelsName'}`}>Шины</p>
                    <p className={`${toggleState && 'diskName'}`}>Диски</p>
                </div>
            </div>
        </div>
    );
};

export default Togle;