import React, {useState} from 'react';

const BurgerMenuItem = () => {
    const [open, setOpen] = useState<boolean>(false);
    const openMenu = (): void => {
        return !open ? setOpen(true) : setOpen(false);
    }

    return (
        <div className='me-1'>
            <div
                className={`burgerMenu ${open ? 'open' : ''}`}
                onClick={openMenu}
            >
                <span></span>
            </div>
        </div>
    );
};

export default BurgerMenuItem;