import React from 'react';

export const Section = ({ grid, row, nopadding, children, id, className = '' }) => {
  return (
    <section 
      id={id}
      className={`
        ${grid ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'flex'} 
        ${row ? 'flex-col md:flex-row' : 'flex-col'} 
        ${nopadding ? 'p-0' : 'pt-8 md:pt-12 px-4 md:px-12'} 
        relative overflow-hidden w-full
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export const SectionTitle = ({ main, center, children }) => {
  return (
    <h2 
      className={`
        font-extrabold w-max max-w-full
        bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60
        ${main ? 'text-3xl md:text-5xl lg:text-6xl leading-tight py-4 md:py-2' : 'text-2xl md:text-4xl leading-snug mb-4'}
        ${center ? 'mx-auto text-center' : ''}
      `}
    >
      {children}
    </h2>
  );
};

export const SectionText = ({ children, className = '' }) => {
  return (
    <p className={`max-w-[800px] text-base md:text-xl font-light text-white/50 pb-6 md:pb-10 ${className}`}>
      {children}
    </p>
  );
};

export const SectionDivider = ({ colorAlt, divider }) => {
  return (
    <div 
      className={`
        w-16 md:w-20 h-1.5 md:h-2 rounded-full 
        ${colorAlt ? 'bg-gradient-to-r from-orange-500 to-purple-500' : 'bg-gradient-to-r from-cyan-400 to-purple-500'}
        ${divider ? 'mb-8' : ''}
      `}
    />
  );
};

export const SectionSubText = ({ children }) => {
  return (
    <p className="max-w-[800px] font-light text-sm md:text-lg text-white/75">
      {children}
    </p>
  );
};

export const SecondaryBtn = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="
        text-white bg-transparent border border-white/33 rounded-full 
        px-6 py-4 font-semibold text-lg w-fit mt-8 mb-20 cursor-pointer 
        transition-all duration-400 ease-in-out hover:text-[#0f1624] hover:bg-white hover:border-white
      "
    >
      {children}
    </button>
  );
};

export const Link = ({ children, href, className = '' }) => {
  return (
    <a href={href} className={`text-[#18C5DD] hover:underline ${className}`}>
      {children}
    </a>
  );
};
