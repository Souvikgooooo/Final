import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onLoginClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLoginClick }) => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Simplify Life,{' '}
              <span className="block">All in One Place!</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Access all the services you need, all in one place - fast, easy, and hassle-free!
            </p>
            <button 
              className="mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center group"
              onClick={onLoginClick}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-sky-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
              alt="Service Illustration"
              className="relative rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
