import React from 'react';
import ProfileInfo from '../../components/profile/ProfileInfo';
import PhotoGallery from '../../components/gallery/PhotoGallery';

const Profile = () => {
    // return (
    //     <div className='profile'>
    //         <div className='container'>
    //             <ProfileInfo />
    //             <PhotoGallery />
    //         </div>
    //     </div>
    // );

    // import React, { useEffect, useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/profiles/1/')
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error(error));
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profile.first_name} {profile.last_name}</h1>
      <p>City: {profile.city}</p>
      <p>Email: {profile.email}</p>
      <p>Description: {profile.description}</p>
      {/* Дополнительные данные профиля */}
    </div>
  );
}

// export default Profile;
};

export default Profile;