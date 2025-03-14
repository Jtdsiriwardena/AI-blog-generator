import React, { useState, useEffect } from 'react';

const Header = () => {
  const [glitch, setGlitch] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gray-900 border-b border-cyan-500/30 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0wIDBoMTJ2LTZIMzZ2NnptMCAwdjE4aDZWMzBoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className={`flex items-center space-x-3 mb-4 md:mb-0 transition-all duration-100 ${glitch ? 'translate-x-[2px]' : ''}`}>
          <div className="relative">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white relative z-10">
              <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" className="fill-cyan-400" />
              <path d="M19 17V10.19L12 15L3 9V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17Z" className="fill-fuchsia-500" fillOpacity="0.8" />
            </svg>
            <div className="absolute inset-0 bg-cyan-500 filter blur-md opacity-40 animate-pulse"></div>
          </div>
          
          <h1 className={`text-3xl font-bold tracking-tight ${glitch ? 'text-red-400' : ''}`}>
            <span className="relative">
              <span className="absolute -inset-1 bg-fuchsia-500 blur opacity-30"></span>
              <span className="relative bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent font-extrabold">Idea</span>
            </span>
            <span className="text-white ml-1 relative">
              <span className="absolute -inset-1 bg-cyan-500 blur opacity-20"></span>
              <span className="relative">Loom</span>
            </span>
          </h1>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-20 blur"></div>
          <p className="text-xl md:text-2xl italic font-semibold tracking-wide leading-relaxed relative">
  <span className="text-cyan-400">&quot;Let AI Do the Writing,</span> 
  <span className="hidden md:inline text-fuchsia-400"> While You Inspire the World.</span>
  <span className="text-cyan-400">&quot;</span>
</p>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
    </header>
  );
};



export default Header;