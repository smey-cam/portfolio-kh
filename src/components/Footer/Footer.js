import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle} from './FooterStyles';
import { StyledButton, StyledForm, StyledInput, StyledInputArea } from '../Projects/ProjectsStyles';
import MapCam from './MapCam';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      subject: subject,
      message: message,
      to_email: 'dararaksmey064@gmail.com'
    };

    emailjs.send('service_83zkjxi', 'template_4univsj', templateParams, 'mgoulfslZziwWonPL')
      .then((response) => {
        alert("Thank you for contacting us.")
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });

    // Clear the form after submission
    setFirstName('');
    setLastName('');
    setSubject('');
    setMessage('');
  }

  return (
    <>
    <FooterWrapper>
      <LinkList>
      {/* <MapCam /> */}
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://web.telegram.org/k/#@darareaksmey">Telegram</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hey@vipuljha.com">
            dararaksmey167@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <div className='w-33'>
        <h1>Let Get In Touch</h1>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First Name' />
          <StyledInput type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' />
          <StyledInput type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' />
          <StyledInputArea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' />
          <StyledButton type="submit" disabled={!firstName || !lastName || !subject || !message}>Send Message</StyledButton>
        </StyledForm>
      </div>
    </FooterWrapper>
      <MapCam /> 
      </>
  );
};

export default Footer;
