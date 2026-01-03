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
        I have extensive experience working with a variety of technologies as a developer. I have developed and maintained multiple projects using these technologies, and I am always eager to learn more.
      </SectionText>
      
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category}>
          <h3 style={{color: '#9cc9e3', marginTop: '2rem', marginBottom: '1rem', fontSize: '2.5rem'}}>{category}</h3>
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