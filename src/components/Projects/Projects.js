import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => (
  <Section id="projects" className="z-10">
    <SectionTitle main>Projects</SectionTitle>
    <SectionDivider divider />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
      {projects.map((p, i) => (
        <motion.div 
          key={i} 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="group rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.4)] hover:border-cyan-500/50"
        >
          <div className="w-full aspect-video overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60" />
            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>

          <div className="p-6 flex flex-col flex-grow relative z-20 -mt-6">
            <h3 className="text-xl font-bold text-white mb-2 mt-2 group-hover:text-cyan-400 transition-colors duration-300">{p.title}</h3>
            <p className="text-sm text-white/70 mb-4">{p.description}</p>
            
            <div className="mb-6 flex-grow">
              <ul className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((t, idx) => (
                  <li key={idx} className="bg-white/5 border border-white/10 text-cyan-200/80 px-2 py-1 rounded-full text-[10px] font-medium tracking-wide">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-3 mt-auto">
              <a 
                href={p.visit} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 text-center text-xs py-2 px-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 font-bold tracking-wide"
              >
                PREVIEW
              </a>
              {/* <a 
                href={p.source} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 text-center text-xs py-2 px-3 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 font-bold tracking-wide"
              >
                CODE
              </a> */}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Projects;