import React, {FC} from 'react';

type TProps = {
    show: boolean
}

const FiltersCheckBox: FC<TProps> = ({show}: TProps) => {
    return (
        <div className={`filter_select_box ${show ? 'd-block' : 'd-none'}`}>
            <div>
                <input type="checkbox" id='1'/>
                <label>checkbox</label>
            </div>

            <div>
                <input type="checkbox" id='2'/>
                <label>checkbox2</label>
            </div>
        </div>
    );
};

export default FiltersCheckBox;