import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListTitle } from "./TechnologiesStyles";
import { Skills } from './Skills'

const Technologies = () => {
  const categories = {
    "Frontend": Skills.slice(0, 5),
    "Backend": Skills.slice(5, 8),
    "Database": Skills.slice(8, 11),
    "Tools & Workflow": Skills.slice(11, 15),
    "CMS": Skills.slice(15, 16),
    "Design Tools": Skills.slice(16, 19),
  };

  return (
    <Section id="skills">
      <SectionDivider divider />
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
          I specialize in full-stack web development with a comprehensive toolkit that spans modern frontend frameworks, robust backend technologies, and efficient database solutions. My experience includes building responsive user interfaces, developing scalable APIs, managing complex databases, and collaborating effectively using industry-standard tools and workflows. I&apos;m committed to continuous learning and applying best practices to deliver high-quality, maintainable solutions.
      </SectionText>
      
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category}>
          <h3 style={{color: '#9cc9e3', marginTop: '1rem', marginBottom: '2rem', fontSize: '2.5rem'}}>{category}</h3>
          <List>
            {skills.map((Skill) => {
              const SkillComponent = Skill.Component;
              
              if (!SkillComponent) {
                console.error('Missing component for skill:', Skill.title);
                return null;
              }
              
              return (
                <ListItem key={Skill.slug}>
                  <picture>
                    <SkillComponent size="3rem" />
                  </picture>
                  <ListContainer>
                    <ListTitle>{Skill.title}</ListTitle>
                  </ListContainer>
                </ListItem>
              );
            })}
          </List>
        </div>
      ))}
    </Section>
  );
};

export default Technologies;