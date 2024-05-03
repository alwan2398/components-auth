import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import './ButtonLogin.css';
import { useNavigate } from 'react-router-dom';

const ButtonLogin = () => {
  const navigate = useNavigate(); // Panggil useNavigate di tingkat komponen
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User berhasil login:', user);
      // Navigasikan ke rute yang tepat
      navigate("/Dashboard"); // Gunakan rute yang sesuai
    } catch (error) {
      console.error("Maaf, terjadi kesalahan:", error.message);
    }
  };

  return (
    <button onClick={handleGoogleLogin}>
      Silakan Masuk
    </button>
  );
};

export default ButtonLogin;
