import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Timeline = () => {
    const timelineData = [
        {
            year: '2021 - Present',
            company: 'ARH Technologies',
            title: 'Web Developer',
            events: [
                'Led a team of web developers to design and deliver customized web applications based on client requirements.',
                'Developed and maintained full-stack solutions using React.js, Next.js, Node.js.',
                'Integrated third-party and internal RESTful APIs to improve system functionality and performance.',
                'Optimized website performance, reducing load times through code refactoring and best-practice implementation.',
                'Mentored junior developers, conducted code reviews, and enforced Git version-control standards.',
                'Collaborated cross-functionally with designers and backend teams to ensure responsive and user-friendly UI/UX.'
            ],
        },
        {
            year: '02.05.2026 – 31.05.2026',
            company: 'ISTC Kampong Chhnang Campus',
            title: 'Internet Programming (HTML & CSS, Tech University)',
            events: [
                'Developed multiple static web pages using HTML5 and CSS3 as part of Internet Programming coursework',
                'Built structured layouts using semantic HTML elements such as header, section, article, and footer',
                'Designed responsive user interfaces using CSS techniques including Flexbox and basic Grid layout',
                'Applied CSS styling for typography, colors, spacing, and visual hierarchy to improve UI design',
                'Practiced form creation and input validation using HTML form elements',
                'Worked on small projects such as personal profile page, simple landing page, and basic website layout',
                'Improved understanding of web development fundamentals, including browser rendering and front-end structure'
            ],
        },
        {
            year: '2023 - 2024',
            company: 'Asia Euro University',
            title: 'Microsoft Office (Tech University)',
            events: [
                'Taught Microsoft Office tools including Word, Excel, PowerPoint, and Outlook to university students.',
                'Prepared structured lesson plans, learning materials, and practical exercises.',
                'Guided students in creating professional reports, presentations, and data-driven spreadsheets.',
                'Evaluated student progress and provided feedback to improve productivity and technical skills.'
            ]
        },
        {
            year: '2019 - 2020',
            company: 'Cambodian Distribution System',
            title: 'Database Administrator',
            events: [
                'Managed and maintained MySQL and SQL Server databases to ensure high availability and performance.',
                'Performed database optimization, query tuning, and regular system backups.',
                'Implemented data security measures, access control, and integrity checks.',
                'Collaborated with software developers to improve data access efficiency and application performance.',
                'Monitored database health and resolved performance or data-consistency issues.'
            ]
        },
        {
            year: '2018 - 2019',
            company: 'MM Pharma Co., LTD',
            title: 'Graphic Designer',
            events: [
                'Designed visual assets including logos, banners, social media graphics, posters, and marketing materials aligned with brand guidelines.',
                'Collaborated with marketing and development teams to create UI/UX visuals that enhanced user engagement and brand consistency.',
                'Used tools such as Adobe Photoshop, Illustrator, and Figma to produce high-quality designs for digital and print platforms.',
                'Translated client requirements into creative design solutions while meeting deadlines and quality standards.'
            ]
        }
    ];

    return (
        <Section id="experience" className="z-10">
            <SectionTitle main>Work Experience</SectionTitle>
            <SectionDivider divider />
            <div className="flex flex-col items-center pt-12 w-full max-w-4xl mx-auto">
                {timelineData.map((data, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      className="border-l-2 border-cyan-400/50 relative pl-8 md:pl-12 w-full mb-12 before:content-[''] before:absolute before:-left-[9px] before:top-2 before:w-4 before:h-4 before:bg-slate-900 before:border-2 before:border-cyan-400 before:rounded-full group hover:before:bg-cyan-400 hover:before:shadow-[0_0_15px_rgba(34,211,238,1)] before:transition-all before:duration-300"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-wide group-hover:text-cyan-400 transition-colors duration-300">{data.company}</h3>
                                <h4 className="text-base md:text-lg text-purple-400 font-medium tracking-wide">{data.title}</h4>
                            </div>
                            <div className="text-xs md:text-sm text-cyan-300 font-bold mt-3 md:mt-0 px-4 py-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/30 tracking-widest uppercase">
                                {data.year}
                            </div>
                        </div>
                        <ul className="mt-4 space-y-3">
                            {data.events.map((event, eventIdx) => (
                                <li key={eventIdx} className="relative pl-5 leading-relaxed text-sm md:text-base text-slate-300/80 group-hover:text-white transition-colors duration-300 before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:bg-purple-500/50 before:rounded-full">
                                    {event}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Timeline;