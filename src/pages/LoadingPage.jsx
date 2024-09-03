// src/pages/LoadingPage.jsx
import React, { useEffect, useState } from 'react';

const LoadingPage = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) onLoadingComplete();
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-orange-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-full h-full sm:w-fit lg:w-fit lg:h-xs"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="sunburst" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFA500" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#sunburst)" />
          <path d="M50 10 C60 30 70 30 80 50 C70 70 60 70 50 90 C40 70 30 70 20 50 C30 30 40 30 50 10" fill="#8B4513" />
        </svg>
      </div>
      <div className="relative text-center z-10 flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brown-800 mb-4 shadow-text">
          अहिंसा परमो धर्मः
        </h1>
        <p className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl text-brown-700 shadow-text">
         || Jai Jinendra ||
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;

