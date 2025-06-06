// src/components/Login.tsx
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa'; // Google icon from react-icons
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useUser } from '../context/UserContext'; // Import user context

interface LoginProps {
  onClose: () => void;
  onSignUpClick: () => void; // Added to switch to Sign Up modal
}

const Login: React.FC<LoginProps> = ({ onClose, onSignUpClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser(); // Get setUser function from context

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8000/api/auth/login', {
      email,
      password,
    });

    console.log('Login Successful:', response.data);

    // Assuming the backend returns user data and accessToken on successful login
    const userData = {
      ...response.data.user, // Use user data from the backend response
      accessToken: response.data.accessToken, // Store the access token
      type: response.data.user.role as 'customer' | 'serviceprovider' // Ensure type is correct for context
    };

    // Set user in context (which also saves to localStorage)
    setUser(userData);

    console.log('User data type:', userData.type); // Add this line

    // Redirect based on role
    if (userData.type === 'customer') {
      window.location.href = 'http://localhost:8080/'; // Redirect to customer dashboard
    } else if (userData.type === 'provider') {
      window.location.href = 'http://localhost:8081/'; // Redirect to service provider dashboard
    }

    onClose(); // Close the modal on successful login and redirection

  } catch (error) {
    console.error('Login Failed:', error);
    let errorMessage = 'Login failed. Please try again.';
    if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    alert(errorMessage);
  }
};

const handleLogout = async () => {
  try {
    await axios.post('http://localhost:8000/api/auth/logout');
    // Clear user from context (which also removes from localStorage)
    setUser(null);
    // Redirect to landing page or login page
    window.location.href = 'http://localhost:5173/'; // Assuming landing page is on 5173
  } catch (error) {
    console.error('Logout Failed:', error);
    // Handle logout error (e.g., show a message)
  }
};


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-primary">Log In</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Log In
          </button>
        </form>

        <div className="text-center pt-2">
          <button
            onClick={() => alert('Forgot password functionality')}
            className="text-sm text-primary hover:underline"
          >
            Forgot Password?
          </button>
        </div>
        
        <div className="mt-6 py-4 px-4 bg-secondary/50 rounded-lg border border-border">
          <p className="text-center text-sm text-secondary-foreground">
            Don't have an account yet?{' '}
            <button
              onClick={onSignUpClick}
              className="font-semibold text-primary hover:underline"
            >
              Sign up here
            </button>
          </p>
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
