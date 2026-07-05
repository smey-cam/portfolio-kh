import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 50, text: 'Shell Scripts', },
  { number: 250000, text: 'Downloads', },
  { number: 200, text: 'Github Stars', }
];

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Acomplishments = () => (
  <Section className="py-12">
    <SectionTitle>Personal Achievements</SectionTitle>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10 px-4 md:px-0">
      {data.map((card, index) => (
        <motion.div 
          key={index}
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#141414] rounded-2xl p-6 flex flex-col items-center justify-center border border-white/10 transition-all duration-300 hover:scale-105 hover:border-[#18C5DD]/50 hover:shadow-[0_0_20px_rgba(24,197,221,0.2)]"
        >
          <h5 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            {`${card.number.toLocaleString('en-IN')}+`}
          </h5>
          <p className="text-white/70 text-sm md:text-base text-center font-medium">
            {card.text}
          </p>
        </motion.div>
      ))}
    </div>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
