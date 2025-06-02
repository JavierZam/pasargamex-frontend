import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
// import RegisterPage from './pages/Auth/RegisterPage'; // Akan kita buat

// Placeholder untuk halaman yang dilindungi
const ProtectedRoute = () => {
  const token = localStorage.getItem('authToken');
  // Di sini Anda bisa menambahkan logika verifikasi token jika perlu
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />; // Outlet merender child route dari ProtectedRoute
};

// Placeholder untuk halaman dashboard
const DashboardPage = () => (
    <div className="p-4">
        <h1 className="text-2xl mb-4">Welcome to PasargameX Dashboard!</h1>
        <p className="mb-4">Ini adalah halaman dashboard sederhana setelah Anda berhasil login.</p>
        <button 
            onClick={() => { 
                localStorage.removeItem('authToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('userData');
                window.location.href = '/login'; 
            }}
            className="bg-pgx-red hover:bg-pgx-red/90 text-white font-bold py-2 px-4 rounded"
        >
            Logout
        </button>
    </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        
        {/* Rute yang dilindungi */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Tambahkan rute terproteksi lainnya di sini */}
        </Route>
        
        {/* Redirect default ke login jika tidak ada path yang cocok dan tidak ada token */}
        {/* Atau ke dashboard jika ada token */}
        <Route 
          path="/" 
          element={localStorage.getItem('authToken') ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} 
        />
        {/* Tambahkan halaman 404 nanti */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;