// src/components/Login.tsx
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa'; // Google icon from react-icons
import axios from 'axios';
interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/login', {
      email,
      password,
    });

    console.log('Login Successful:', response.data);
    // You can redirect the user, or store token etc.
  } catch (error) {
    console.error('Login Failed:', error);
    alert('Login failed. Please check your credentials.');
  }
};


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-emerald-600">Log In</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-sky-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-sky-700 transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center justify-between space-x-4">
          <button
            className="flex-1 bg-white text-gray-700 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
          >
            <FaGoogle className="w-5 h-5 text-gray-500" />
            <span>Sign in with Google</span>
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={() => alert('Forgot password functionality')}
            className="text-sm text-emerald-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
