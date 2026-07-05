import React from 'react';
import { motion } from 'framer-motion';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2, 
      delayChildren: 0.3 
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <motion.div 
        className="w-full flex flex-col justify-center lg:w-4/4 xl:w-3/3 pt-12 mx-auto sm:mx-0 z-10"
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 mb-6 leading-tight">
            Allow me to <br className="hidden md:block" /> introduce myself
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="max-w-[800px] text-base md:text-lg font-light text-slate-300/80 leading-relaxed mb-10">
            Hi, I&apos;m <span className="text-cyan-400 font-medium">Chham Dararaksmey</span> – a Senior Web Developer with 4 years of experience specializing in building and maintaining full-stack applications. I approach every project with dedication and a commitment to excellence.
            <br /><br />
            I completed my Master of Computer Science at Asia Euro University and hold a B.S. in Computer Science from RUPP. Let&apos;s build something amazing together!
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-5 ml-4">
          <Button onClick={(e) => {
            e.preventDefault();
            window.location.href = '/files/resume.pdf';
          }}>My Resume</Button>

          <Button alt onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://drive.google.com/drive/folders/1RrTv_g4RS0UZF87H6Excl6MnnI_89kj2';
          }}>Achievements</Button>
        </motion.div>
      </motion.div>
    </Section>
  </>
);

export default Hero;
