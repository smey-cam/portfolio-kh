import React from 'react';

const Button = ({ children, onClick, disabled, alt }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className={`
      relative overflow-hidden rounded-full font-semibold text-white tracking-wide
      flex items-center justify-center cursor-pointer transition-all duration-300
      w-full sm:w-fit px-8 py-3 md:py-4 text-sm md:text-lg border
      ${alt 
        ? 'bg-transparent border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
        : 'bg-cyan-500/10 border-cyan-400/50 hover:bg-cyan-400/20 hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]'
      }
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
    `}
  >
    {children}
  </button>
);

export default Button;
