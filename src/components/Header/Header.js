import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NavLink = ({ href, children, isActive }) => (
  <Link href={href} onClick={(e) => {
    // Optional: Smooth scroll to section if needed, but Next.js Link handles hashes okay
  }} className={`text-sm md:text-base font-medium transition-colors duration-300 relative group p-2 ${isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}>
    {children}
    <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-cyan-400 transition-all duration-300 rounded-full ${isActive ? 'w-full shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}></span>
  </Link>
);

const SocialIcon = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-slate-300 p-2 transition-all duration-300 hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
  >
    {children}
  </a>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['projects', 'skills', 'experience'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    
    // Call once on mount to set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full rounded-2xl transition-all duration-300 mt-4 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 border ${
        isScrolled 
          ? 'bg-slate-900/60 backdrop-blur-md border-slate-700/50 shadow-lg shadow-black/20' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="flex items-center">
        <Link href="/" onClick={() => setActiveSection('')} className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tighter hover:scale-105 transition-transform duration-300">
          Chham.Dararaksmey
        </Link>
      </div>
      
      <nav>
        <ul className="flex items-center gap-6 md:gap-10">
          <li><NavLink href="#projects" isActive={activeSection === 'projects'}>Projects</NavLink></li>
          <li><NavLink href="#skills" isActive={activeSection === 'skills'}>Skills</NavLink></li>
          <li><NavLink href="#experience" isActive={activeSection === 'experience'}>Experience</NavLink></li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <SocialIcon href="https://github.com/smey-cam"><AiFillGithub size="24px" /></SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/chham-dararaksmey-b7b1081a3/"><AiFillLinkedin size="24px" /></SocialIcon>
        <SocialIcon href="https://web.telegram.org/k/#@darareaksmey"><FaTelegram size="24px" /></SocialIcon>
        <SocialIcon href="https://www.facebook.com/chham.dararaksmey.9?mibextid=ZbWKwL"><AiFillFacebook size="24px" /></SocialIcon>
      </div>
    </motion.header>
  );
};

export default Header;
