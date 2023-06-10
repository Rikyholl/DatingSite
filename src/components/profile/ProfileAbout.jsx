import React from 'react';
import {BiTimeFive} from 'react-icons/Bi'

const ProfileAbout = () => {
    return (
        <div className='Profile__about'>
            
            <div className='Profile__about--text'>
                Люблю гулять, рисовать, читать. Работаю менеджером по продажам. Готов к новым знакомствам
                Люблю гулять, рисовать, читать. Работаю менеджером по продажам. Готов к новым знакомствам
                Люблю гулять, рисовать, читать. Работаю менеджером по продажам. Готов к новым знакомствам
            </div>

            <div className='Profile__about--visite'>
                
                <BiTimeFive />
                24 ч назад
            </div>
        </div>
    );
};

export default ProfileAbout;