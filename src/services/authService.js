import axiosInstance from '../config/axiosConfig';

const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', { // Menggunakan endpoint dari backend Anda
      email,
      password,
    });
    // Backend Anda mengembalikan data user dan token langsung di body respons
    return response.data; 
  } catch (error) {
    let errorMessage = 'Login failed. Please check your credentials.';
    if (error.response && error.response.data && error.response.data.error) {
        // Jika backend mengirimkan error dalam format { success: false, error: { code: "...", message: "..." } }
        errorMessage = error.response.data.error.message;
    } else if (error.response && error.response.data && typeof error.response.data === 'string') {
         // Jika backend mengirim error sebagai string biasa (mis: dari echo.NewHTTPError)
         errorMessage = error.response.data;
    } else if (error.message) {
        errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }
};

// Nanti kita tambahkan fungsi register, logout, refreshToken di sini

export default {
  login,
};