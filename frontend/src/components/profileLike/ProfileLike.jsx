import React from 'react';
import {MdFavorite} from 'react-icons/md'
import {GrClose} from 'react-icons/gr'
import {BsFillChatFill} from 'react-icons/bs'

const ProfileLike = () => {
    return (
        <div className='profile__like'>
            <button className='profile__like--btn'>
                <MdFavorite size={30} style={{color: 'rgb(218,64,175)'}} />
            </button>
           
            <button className='profile__like--btn'>
                <GrClose size={30} />
            </button>
           
            <button className='profile__like--btn'>   
                <BsFillChatFill size={30} style={{color: 'rgb(218,64,175)'}} />
            </button>
        </div>
    );
};

export default ProfileLike;