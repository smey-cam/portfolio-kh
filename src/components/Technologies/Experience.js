import React from "react";
import { Section, SectionDivider, SectionTitle, } from "../../styles/GlobalComponents";
import TimelineNew from "./TimelineNew";


const Experience = () => (
  <Section id="experience">
    <SectionDivider divider />
    <SectionTitle>Work Experience</SectionTitle>
    <TimelineNew />
    <SectionDivider colorAlt />
  </Section>
);

export default Experience;
