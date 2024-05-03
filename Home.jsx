import React, { useState } from 'react'; // Impor useState
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User berhasil login:', user);
      navigate('/dashboard')

    } catch (error) {
      setError(error.message);
      console.error('Error saat login:', error.message);
    }
  };

  return (
    <div>
      <h1>Silakan Login</h1>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Memperbarui state email
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Memperbarui state password
      />
      <button onClick={handleLogin}>Login</button> {/* Memanggil fungsi login */}

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Menampilkan error jika ada */}
    </div>
  );
};

export default Home; // Mengekspor komponen
