import React from 'react';
import { ExternalLink } from 'lucide-react';

const InteractiveButton = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute -inset-1 bg-blue-500 rounded-lg opacity-75 blur animate-pulse"></div>
        
        {/* Button with animated border and background */}
        <a 
          href="https://training.nervecentresoftware.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/50 animate-bounce"
        >
          <span className="text-lg">Click Here</span>
          <ExternalLink size={24} />
        </a>
      </div>
      
      <p className="text-lg text-gray-700 text-center mt-4">
        <strong className="text-xl text-blue-600">Nervecentre</strong>
        <br />
        Click on the button to be taken to the relevant part of Nervecentre Training site.
      </p>
    </div>
  );
};

export default InteractiveButton;