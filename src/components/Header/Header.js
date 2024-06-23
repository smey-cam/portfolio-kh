import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import { FaTelegram } from 'react-icons/fa';
import logo from "../../assets/logo.png"
import Image from 'next/image';

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <Image src={logo} alt="Logo" height={50} width={200} />
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      {/* <li>
        <a href="https://blog.vipuljha.com">
          <NavLink>Blog</NavLink>
        </a>
      </li> */}
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/chhamgit">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/chham-dararaksmey-b7b1081a3/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://web.telegram.org/k/#@darareaksmey">
        <FaTelegram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/chham.dararaksmey.9?mibextid=ZbWKwL">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
