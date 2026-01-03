import React from "react";
import { Section, SectionDivider, SectionTitle, } from "../../styles/GlobalComponents";
import TimelineNew from "./TimelineNew";


const Experience = () => (
  <Section id="experience">
    <SectionTitle>Work Experience</SectionTitle>
    <SectionDivider divider />
    <TimelineNew />
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Experience;
