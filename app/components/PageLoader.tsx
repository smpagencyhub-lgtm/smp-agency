'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate page loading - wait for all resources to load
    const handleLoad = () => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setIsFadingOut(true);
        // Remove loader from DOM after fade out animation
        setTimeout(() => {
          setIsLoading(false);
        }, 600); // Match fade out duration
      }, 400);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-600 ease-in-out ${
          isFadingOut ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Background gradient effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Animated Logo/Text */}
          <div className="mb-10 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              <span className="text-white inline-block animate-slide-in-left">FANS</span>{' '}
              <span className="text-red-600 inline-block animate-slide-in-right animate-pulse">HUB</span>
            </h1>
          </div>

          {/* Loading Spinner */}
          <div className="relative w-20 h-20 mb-8">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
            
            {/* Animated red ring - smooth rotation */}
            <div 
              className="absolute inset-0 border-4 border-transparent border-t-red-600 rounded-full"
              style={{
                animation: 'spin 1s linear infinite'
              }}
            ></div>
            
            {/* Secondary ring for depth */}
            <div 
              className="absolute inset-2 border-4 border-transparent border-r-red-500/50 rounded-full"
              style={{
                animation: 'spin 0.8s linear infinite reverse'
              }}
            ></div>
            
            {/* Inner pulsing dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-3 h-3 bg-red-600 rounded-full"
                style={{
                  animation: 'pulse 1.5s ease-in-out infinite'
                }}
              ></div>
            </div>
          </div>

          {/* Loading text */}
          <p 
            className="mt-4 text-gray-400 text-sm sm:text-base font-serif tracking-wider"
            style={{
              animation: 'fadeInOut 2s ease-in-out infinite'
            }}
          >
            Loading...
          </p>

          {/* Progress bar */}
          <div className="mt-8 w-56 sm:w-72 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-600 rounded-full"
              style={{
                width: '0%',
                animation: 'progress 2s ease-in-out infinite'
              }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out 0.2s both;
        }
      `}</style>
    </>
  );
}
