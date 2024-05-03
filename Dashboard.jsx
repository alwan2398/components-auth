import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../Firebase/Firebase';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false); // State untuk kontrol navigasi

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        alert('Berhasil Keluar');
        setIsLoggedOut(true); // Set state untuk memicu navigasi
      })
      .catch((error) => {
        console.error('Kesalahan saat logout:', error.message);
      });
  };

  // Jika isLoggedOut true, maka navigasi ke home
  if (isLoggedOut) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Login Sukses</h1>
      <p>Selamat Datang</p>
      <button onClick={handleLogout}>Keluar</button>
    </div>
  );
};

export default Dashboard;
