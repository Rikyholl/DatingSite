import React, { useEffect, useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/profiles/2/')
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

export default Profile;
