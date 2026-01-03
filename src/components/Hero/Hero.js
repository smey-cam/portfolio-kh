import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Allow me to introduce myself
        </SectionTitle>
        <SectionText>
          Hi, I'm Chham Dararaksmey – a Senior Web Developer with 3.5+ years of experience specializing in building and maintaining full-stack applications. Whether starting from scratch or enhancing existing systems, I approach every project with dedication and a commitment to excellence.
          I'm driven by a simple philosophy: attitude is everything. I bring 100% effort to everything I do and constantly seek opportunities to learn and grow. What excites me most is creating solutions that help others achieve their goals and make a real impact.
          I completed my Master of Computer Science at Asia Euro University and hold a B.S. in Computer Science from RUPP University. I love connecting with fellow developers and potential collaborators. Let's connect!
        </SectionText>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button onClick={(e) => {
            e.preventDefault();
            window.location.href = '/files/resume.pdf';
          }}>My Resume</Button>

          <Button onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://drive.google.com/drive/folders/1RrTv_g4RS0UZF87H6Excl6MnnI_89kj2';
          }}>Achievements</Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
