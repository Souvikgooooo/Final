import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: 'Trusted Services',
      description: 'All our service providers are thoroughly vetted and verified for your peace of mind.'
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: '24/7 Availability',
      description: "Access our services anytime, anywhere. We're here when you need us."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: 'Expert Professionals',
      description: 'Work with skilled and experienced professionals in every service category.'
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      title: 'Quality Guaranteed',
      description: 'We stand behind our service quality with satisfaction guarantee.'
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-sky-200 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team working"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Award className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5+ Years</p>
                    <p className="text-gray-600">of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Transforming Service
              <span className="block text-primary">Delivery Excellence</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              At ThrivePro, we're committed to revolutionizing how services are delivered. Our platform connects you with trusted professionals who are passionate about delivering exceptional service experiences.
            </p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-emerald-50 rounded-lg p-3 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
