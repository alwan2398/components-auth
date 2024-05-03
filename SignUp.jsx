import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom'; // Gunakan useNavigate

const SignUp = () => {
  const navigate = useNavigate(); // Panggil useNavigate untuk mendapatkan fungsi navigasi
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Berhasil daftar:', userCredential.user);
      navigate('/home'); // Navigasi ke halaman Home
    } catch (error) {
      setError(error.message);
      console.error('Error saat mendaftar:', error.message);
    }
  };

  return (
    <div>
      <h2>Silakan Daftar Dulu</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Daftar Akun</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Menampilkan pesan error jika ada */}
    </div>
  );
};

export default SignUp;
