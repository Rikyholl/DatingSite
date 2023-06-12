import React from 'react';
import ProfileAbout from './ProfileAbout';
import ProfileLike from '../profileLike/ProfileLike';

const ProfileInfo = () => {


    return (
        <div className='profile_about'>
        
                <img src='https://reqres.in/img/faces/7-image.jpg' width={400} height={250} className='profile_image'/>

                <div className='profile_info'>

                    <h3 className='profile_name'> Василий Пупкин</h3>
                    
                    <div className='profile_life'>
                        <p>26</p>
                        <p style={{padding: '0 7px'}}> - </p>
                        <p>Пермь, Россия</p>
                    </div>

                    <ProfileAbout />
                </div>
                <ProfileLike />
           
        </div>
    );
};

export default ProfileInfo;