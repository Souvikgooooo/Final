// src/components/SignUpForm.tsx
import React, { useState } from 'react';
import { User, Phone, Mail, Lock, CheckCircle } from 'lucide-react'; // Importing icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useUser } from '../context/UserContext'; // Import user context

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  service?: string; // Only for service provider
  experience?: string; // Only for service provider
  tradeLicense?: string; // Only for service provider
}

interface SignUpFormProps {
  role: 'serviceProvider' | 'customer';
  onBack: () => void;
  onClose: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ role, onBack, onClose }) => {
  const navigate = useNavigate(); // Initialize the navigate function
  const { setUser } = useUser(); // Get setUser function from context
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    service: '',
    experience: '',
    tradeLicense: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      // Here you would typically make an API call to register the user
      // For now, we'll just simulate successful registration
      
      const userData = {
        ...formData,
        // Convert role to the expected type format in the UserContext
        type: (role === 'serviceProvider' ? 'serviceprovider' : 'customer') as 'customer' | 'serviceprovider'
      };
      
      // Set user in context (which also saves to localStorage)
      setUser(userData);
      
      // Redirect based on role
      if (role === 'customer') {
        window.location.href = 'http://localhost:8083/'; // Redirect to customer dashboard
      } else if (role === 'serviceProvider') {
        window.location.href = 'http://localhost:8084/'; // Redirect to service provider dashboard
      }
      
      // Close the signup modal
      onClose();
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration error (show message to user)
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-8 space-y-6 transform transition-all">
        <h2 className="text-2xl font-semibold text-center mb-4 text-emerald-600">
          {role === 'serviceProvider' ? 'Service Provider Sign Up' : 'Customer Sign Up'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-emerald-600 transition-all">
            <User className="w-6 h-6 text-gray-600" />
            <input
              type="text"
              name="name"
              placeholder={role === 'serviceProvider' ? 'Service Provider Name' : 'Full Name'}
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-3 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-emerald-600 transition-all">
            <Phone className="w-6 h-6 text-gray-600" />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full pl-3 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-emerald-600 transition-all">
            <Mail className="w-6 h-6 text-gray-600" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-3 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-emerald-600 transition-all">
            <Lock className="w-6 h-6 text-gray-600" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-3 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Conditional Fields for Service Provider */}
          {role === 'serviceProvider' && (
            <>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-emerald-600 transition-all">
                <CheckCircle className="w-6 h-6 text-gray-600" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full pl-3 text-gray-700 focus:outline-none"
                >
                  <option value="">Choose Service</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Carpentry">Carpentry</option>
                </select>
              </div>

              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-emerald-600 transition-all">
                <CheckCircle className="w-6 h-6 text-gray-600" />
                <input
                  type="text"
                  name="experience"
                  placeholder="Experience (Years)"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full pl-3 text-gray-700 focus:outline-none"
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-emerald-600 transition-all">
                <CheckCircle className="w-6 h-6 text-gray-600" />
                <input
                  type="text"
                  name="tradeLicense"
                  placeholder="Trade License"
                  value={formData.tradeLicense}
                  onChange={handleChange}
                  className="w-full pl-3 text-gray-700 focus:outline-none"
                />
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="flex justify-between items-center space-x-4">
            <button
              type="button"
              onClick={onBack}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
