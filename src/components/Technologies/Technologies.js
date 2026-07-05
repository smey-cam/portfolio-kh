import React from "react";
import { motion } from "framer-motion";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { Skills } from './Skills'
import { FaCode, FaServer, FaDatabase, FaTools, FaFileAlt, FaPaintBrush } from "react-icons/fa";

const listVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const categoryIcons = {
  "Frontend": <FaCode className="mr-4 text-cyan-400" />,
  "Backend": <FaServer className="mr-4 text-purple-400" />,
  "Database": <FaDatabase className="mr-4 text-emerald-400" />,
  "Tools & Workflow": <FaTools className="mr-4 text-yellow-400" />,
  "CMS": <FaFileAlt className="mr-4 text-blue-400" />,
  "Design Tools": <FaPaintBrush className="mr-4 text-pink-400" />,
};

const Technologies = () => {
  const categories = {
    Frontend: Skills.slice(0, 8),
    Backend: Skills.slice(8, 12),
    Database: Skills.slice(12, 15),
    "Tools & Workflow": Skills.slice(15, 19),
    CMS: Skills.slice(19, 21),
    "Design Tools": Skills.slice(21, 24),
  };

  return (
    <Section id="skills" className="relative z-10">
      <SectionTitle main>Skills</SectionTitle>
      <SectionDivider divider />
      <SectionText className="mb-16 text-lg md:text-xl text-slate-300/80 max-w-4xl leading-relaxed">
          I specialize in full-stack web development with a comprehensive toolkit that spans modern frontend frameworks, robust backend technologies, and efficient database solutions. My experience includes building responsive user interfaces, developing scalable APIs, managing complex databases, and collaborating effectively using industry-standard tools and workflows. I&apos;m committed to continuous learning and applying best practices to deliver high-quality, maintainable solutions.
      </SectionText>
      
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="mb-16">
          <h3 className="flex items-center text-xl md:text-2xl font-extrabold text-white mb-6 tracking-wide">
            {categoryIcons[category]}
            {category}
          </h3>
          <motion.div 
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {skills.map((Skill) => {
              const SkillComponent = Skill.Component;
              if (!SkillComponent) return null;
              
              return (
                <motion.div 
                  key={Skill.slug} 
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.3)] cursor-pointer group"
                >
                  <div className="text-white/60 group-hover:text-cyan-400 transition-colors duration-300 mb-4">
                    <SkillComponent size="2.5rem" />
                  </div>
                  <h4 className="text-center text-sm md:text-base font-bold text-white/90 group-hover:text-white transition-colors duration-300 tracking-wide">
                    {Skill.title}
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      ))}
    </Section>
  );
};

export default Technologies;