import React, {useState} from 'react';

const Profile = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dadName, setDadName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    return (
        <div className='default_wrapper profile_page'>
            <div className='profile_title_box'>
                <h1 className='profile_title'>Личный кабинет</h1>
                <div className='profile_title_info'>
                    <span className='profile_title_text'>Имя пользователя</span>
                    <div className='profile_title_sep'></div>
                    <span className='profile_title_text'>Выход</span>
                </div>
            </div>
            <div className='profile_content_box'>
                <div className='profile_navbar'>
                    <div className='profile_nav_item'>Личные данные</div>
                </div>
                <div className='profile_content'>
                    <div className='profile_content_title'>Профиль</div>
                    <form className='profile_form'>
                        <div className='profile_form_input_group'>
                            <div className='profile_input_box'>
                                <label className='profile_label'>Фамилия</label>
                                <input type='text' value={lastName} onChange={e => setLastName(e.target.value)}/>
                            </div>
                            <div className='profile_input_box'>
                                <label className='profile_label'>Имя</label>
                                <input type='text' value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                        </div>
                        <button>Сохранить</button>
                    </form>
                    <button>Изменить пароль</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;