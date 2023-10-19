import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userData from '../users.json';
import './UserProfile.css';

function UserProfile() {
  const { userId } = useParams();

  // Stocker les données
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Récupération des données
    const userFromJSON = userData.find((user) => user.id === parseInt(userId, 10));
    setUser(userFromJSON);
  }, [userId]);

  return (
    <div className="user-profile-container">
      <h1>Profil de {user ? user.name : 'Utilisateur non trouvé'}</h1>
      {user && (
        <div>
          <p>Nom : {user.name}</p>
          <p>Email : {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
