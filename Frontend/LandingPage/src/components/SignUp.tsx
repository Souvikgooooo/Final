// src/components/SignUp.tsx
import React, { useState } from 'react';
import { Handshake, UserPlus } from 'lucide-react'; // Importing role selection icons
import SignUpForm from './SignUpForm'; // Correct import for the default export

const SignUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [role, setRole] = useState<'serviceProvider' | 'customer' | null>(null);

  const handleRoleSelection = (selectedRole: 'serviceProvider' | 'customer') => {
    setRole(selectedRole);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-8 space-y-6 transform transition-all">
        {role === null ? (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-6 text-emerald-600">Select Your Role</h2>
            <button
              onClick={() => handleRoleSelection('serviceProvider')}
              className="w-full bg-gradient-to-r from-emerald-600 to-sky-600 text-white py-3 rounded-lg mb-4 hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Handshake className="w-6 h-6" />
              <span>Service Provider</span>
            </button>
            <button
              onClick={() => handleRoleSelection('customer')}
              className="w-full bg-gradient-to-r from-emerald-600 to-sky-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
            >
              <UserPlus className="w-6 h-6" />
              <span>Customer</span>
            </button>
          </div>
        ) : (
          <SignUpForm role={role} onBack={() => setRole(null)} onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default SignUp;
