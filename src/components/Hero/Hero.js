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
          I'm Chham Dararaksmey, Have over 3 years of experience in maintaining existing applications or creating one from scratch.
          Lives by "Attitude is everything." and always "100% in everything I do."
          Constantly strive to learn new things and seek advices for improvement in everything.
          Passionate in coding, especially when it involves creating applications that help others to achieve success.
          Graduated from RUPP University with a bachelor degree of B.S. in Computer Science.
          Feel free to contact me if you need my help or know more about me!
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
