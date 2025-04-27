// src/App.tsx
import React, { useState } from 'react';
import { Car, GraduationCap, Home, Lightbulb, Scissors, Wrench } from 'lucide-react';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services'; // Import the Services component
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
function App() {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const services = [
    {
      title: 'House Keeping',
      description: 'Professional cleaning and maintenance services for your home',
      icon: <Home className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Electrical Services',
      description: 'Expert electrical installation and repair services',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Beauty & Wellness',
      description: 'Premium beauty and wellness services at your convenience',
      icon: <Scissors className="w-8 h-8" />,
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Private Tuition',
      description: 'Personalized education from experienced tutors',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Plumbing Services',
      description: 'Professional plumbing solutions for all your needs',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Car Rental',
      description: 'Wide range of vehicles for all your transportation needs',
      icon: <Car className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50">
      {/* Navbar with onLoginClick and onSignUpClick */}
      <Navbar 
        onLoginClick={() => setLoginOpen(true)} 
        onSignUpClick={() => setSignUpOpen(true)} 
      />
      
      {/* Main Content Sections */}
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="services"><Services services={services} /></div> {/* Pass services here */}
      <Blog />
      <Contact />
  
      {/* SignUp Modal */}
      {isSignUpOpen && <SignUp onClose={() => setSignUpOpen(false)} />}
      
      {/* Login Modal */}
      {isLoginOpen && <Login onClose={() => setLoginOpen(false)} />}
    </div>
  );
}

export default App;
