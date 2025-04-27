// src/components/Services.tsx
import React from 'react';

// Define the type for each service
interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

// Define the props for the Services component
interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div key={index} className={`p-6 rounded-lg shadow-lg ${service.color}`}>
          <div className="flex justify-center mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
