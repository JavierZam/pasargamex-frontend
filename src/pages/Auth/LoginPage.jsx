import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/authService';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';
// Pastikan path ke logo benar, atau import dari public folder jika perlu
// Untuk file di `public`, pathnya adalah `/PasargamexLogo1.png`
const logoUrl = '/PasargamexLogo1.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login(email, password);
      
      // Simpan token dan data user ke localStorage
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('refreshToken', response.refresh_token);
      localStorage.setItem('userData', JSON.stringify(response.user)); // User data dari backend
      
      console.log('Login successful. Token:', response.token);
      navigate('/dashboard'); // Arahkan ke halaman setelah login berhasil
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pgx-dark text-pgx-white p-4">
      <div className="p-8 bg-pgx-dark-surface shadow-xl rounded-lg w-full max-w-md">
      <img src={logoUrl} alt="PasargameX Logo" className="w-32 sm:w-40 mx-auto mb-6" />
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Login ke Akun Anda</h2>
        
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            autoComplete="current-password"
            containerClassName="mt-4"
          />

          {error && (
            <div className="mt-4 p-3 bg-red-700/30 text-red-300 border border-red-600/50 rounded text-sm">
              {error}
            </div>
          )}

          <Button type="submit" color="blue" disabled={isLoading} fullWidth className="mt-6">
            {isLoading ? 'Memproses...' : 'Login'}
          </Button>
        </form>
        <p className="text-center text-sm text-pgx-light-gray mt-6">
          Belum punya akun?{' '}
          <Link to="/register" className="font-medium text-pgx-blue hover:text-pgx-blue/80">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;