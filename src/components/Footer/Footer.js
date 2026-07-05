import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import MapCam from './MapCam';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

const SocialIcon = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-slate-300 p-2 md:p-3 bg-slate-900/50 rounded-full border border-white/10 transition-all duration-300 hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] cursor-pointer"
  >
    {children}
  </a>
);

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

    setFirstName('');
    setLastName('');
    setSubject('');
    setMessage('');
  }

  return (
    <>
      <section className="w-full mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row justify-between gap-12 lg:gap-16 border-t border-white/10 mt-16 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 md:w-1/2">
          
          <div className="flex flex-col gap-3">
            <h4 className="text-cyan-400 text-xs md:text-sm uppercase tracking-widest font-bold">Chat</h4>
            <a href="https://web.telegram.org/k/#@darareaksmey" className="text-slate-300 hover:text-white transition-colors text-base md:text-lg font-medium">Telegram</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-cyan-400 text-xs md:text-sm uppercase tracking-widest font-bold">Email</h4>
            <a href="mailto:dararaksmey167@gmail.com" className="text-slate-300 hover:text-white transition-colors text-base md:text-lg font-medium break-all">
              dararaksmey167@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-cyan-400 text-xs md:text-sm uppercase tracking-widest font-bold">Location</h4>
            <span className="text-slate-300 text-base md:text-lg font-medium">
              Phnom Penh, Cambodia
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-cyan-400 text-xs md:text-sm uppercase tracking-widest font-bold">Social Media</h4>
            <div className="flex gap-3">
              <SocialIcon href="https://github.com/smey-cam">
                <AiFillGithub size="1.2rem" />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/chham-dararaksmey-b7b1081a3/">
                <AiFillLinkedin size="1.2rem" />
              </SocialIcon>
              <SocialIcon href="https://web.telegram.org/k/#@darareaksmey">
                <FaTelegram size="1.2rem" />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/chham.dararaksmey.9?mibextid=ZbWKwL">
                <AiFillFacebook size="1.2rem" />
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-slate-900/40 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 md:mb-8 tracking-wide">Let&apos;s Get In Touch</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4 flex-col sm:flex-row">
              <input 
                type="text" 
                value={firstName} 
                onChange={e => setFirstName(e.target.value)} 
                placeholder='First Name' 
                className="w-full bg-black/20 border border-white/10 p-3 md:p-4 rounded-xl text-sm md:text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
              />
              <input 
                type="text" 
                value={lastName} 
                onChange={e => setLastName(e.target.value)} 
                placeholder='Last Name' 
                className="w-full bg-black/20 border border-white/10 p-3 md:p-4 rounded-xl text-sm md:text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>
            <input 
              type="text" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              placeholder='Subject' 
              className="w-full bg-black/20 border border-white/10 p-3 md:p-4 rounded-xl text-sm md:text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
            />
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder='Message' 
              rows={4}
              className="w-full bg-black/20 border border-white/10 p-3 md:p-4 rounded-xl text-sm md:text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
            />
            <button 
              type="submit" 
              disabled={!firstName || !lastName || !subject || !message}
              className="mt-4 w-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-sm md:text-base font-bold tracking-wide py-3 md:py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-400 hover:text-slate-900 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-pointer"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
      <MapCam />
    </>
  );
};

export default Footer;
