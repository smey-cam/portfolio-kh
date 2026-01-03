import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListTitle } from "./TechnologiesStyles";
import { Skills } from './Skills'
import { FaHandPointRight } from "react-icons/fa";
import { SiSubtitleedit } from "react-icons/si";

const Technologies = () => {
  const categories = {
    Frontend: Skills.slice(0, 5),
    Backend: Skills.slice(5, 8),
    Database: Skills.slice(8, 11),
    "Tools & Workflow": Skills.slice(11, 15),
    CMS: Skills.slice(15, 17), // ✅ WordPress + Shopify
    "Design Tools": Skills.slice(17, 20),
  };

  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SectionDivider divider />
      <SectionText>
          I specialize in full-stack web development with a comprehensive toolkit that spans modern frontend frameworks, robust backend technologies, and efficient database solutions. My experience includes building responsive user interfaces, developing scalable APIs, managing complex databases, and collaborating effectively using industry-standard tools and workflows. I&apos;m committed to continuous learning and applying best practices to deliver high-quality, maintainable solutions.
      </SectionText>
      
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category}>
          <h3 
            style={{
              marginTop: "1rem",
              marginBottom: "2rem",
              fontSize: "2.5rem",
              fontWeight: "700",
              color:"#9cc9e3",
              display: "flex",
              alignItems: "center"
            }}
          ><SiSubtitleedit color="#fed524" style={{marginRight:"1rem"}}/>{category}</h3>
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