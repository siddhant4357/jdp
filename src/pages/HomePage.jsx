// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import god from '../assets/god.png';
import flag from '../assets/flag.jpeg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: `url(${flag})` }}
      ></div>
      
      {/* Header */}
      <div className="relative z-10 w-full top-4 h-16 bg-orange-600 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">|| Jay Jinendra ||</h1>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
        {/* Central Figure */}
        <img
          src={god}
          alt="Jain figure"
          className="relative z-20 max-w-[25vh] max-h-[65vh] object-contain my-6 lg:h-[60vh] md:h-[50vh] sm:h-[25vh]"
        />
        
        {/* Buttons Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Upper Buttons */}
          <div className="flex justify-between w-full px-10 absolute top-1/4 transform -translate-y-1/2">
            <button 
              onClick={() => handleButtonClick('/firstpage')} 
              className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 lg:text-2xl font-bold text-white bg-orange-800 border-2 border-orange-800 rounded-lg px-6 py-3 shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 md:text-xl sm:text-sm z-30"
            >
              चालीसा
            </button>
            <button 
              onClick={() => handleButtonClick('/secondpage')} 
              className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 lg:text-2xl font-bold text-white bg-orange-800 border-2 border-orange-800 rounded-lg px-6 py-3 shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 md:text-xl sm:text-sm z-30"
            >
              स्तुति – स्तोत्र
            </button>
          </div>

          {/* Lower Buttons */}
          <div className="flex justify-between w-full px-10 absolute bottom-1/4 transform translate-y-1/2">
          <button 
              onClick={() => handleButtonClick('/thirdpage')} 
              className="absolute bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2 lg:text-2xl font-bold text-white bg-orange-800 border-2 border-orange-800 rounded-lg px-6 py-3 shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 md:text-xl sm:text-sm z-30"
            >
              
            पूजा-पाठ
            </button>
            <button 
              onClick={() => handleButtonClick('/fourthpage')} 
              className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 lg:text-2xl font-bold text-white bg-orange-800 border-2 border-orange-800 rounded-lg px-6 py-3 shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 md:text-xl sm:text-sm z-30"
            >
              
            अन्य 
            </button>
            
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-10 bottom-3 w-full h-8 bg-orange-600 text-white flex items-center justify-center">
        <p className="text-lg font-bold marquee">
          <span className='pl-1'>|| जैनम् जयति शासनम् ||</span>
          <span className='pl-1'>|| जैनम् जयति शासनम् ||</span>
          <span className='pl-1'>|| जैनम् जयति शासनम् ||</span>
          <span className='pl-1'>|| जैनम् जयति शासनम् ||</span>
          <span className='pl-1'>|| जैनम् जयति शासनम् ||</span>
          <span className='pl-1'>|| जैनम् जयति शासनम् ||</span>
          <span className='pl-1'>|| जैनम् जयति शासनम् ||</span>
          <span className='pl-1'>|| जैनम् जयति शासनम् ||</span>
          <span className='pl-1'>|| जैनम् जयति शासनम् ||</span>
        </p>
        <style>
          {`
            .marquee {
              white-space: nowrap;
              animation: marquee 15s linear infinite;
            }
            @keyframes marquee {
              0% {
                transform: translateX(50%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default HomePage;
