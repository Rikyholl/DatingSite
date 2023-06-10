import React from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import PhotoGallery from '../../components/gallery/PhotoGallery';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='container'>
                <ProfileInfo />
                <PhotoGallery />
            </div>
        </div>
    );
};

export default Profile;