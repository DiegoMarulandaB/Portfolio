'use client'
import React from 'react';
import { AiOutlineMail, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';
import AnimatedText from '@/components/AnimatedText/AnimatedText';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center items-center justify-center mt-32">
          <h2 className="text-2xl text-center font-bold mb-4">
            <AnimatedText text="Contact me" className="text-1xl text-left  mr-2 mb-2  mt-2  font-bold" />
          </h2>
          <p className="bg-slate-200 dark:bg-slate-800 mb-4 mt-4">Get in touch with me through these links!</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 mt-4">
          {contactLinks.map((link) => (
            <ContactLink key={link.text} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ContactLinkProps {
  href: string;
  text: string;
  icon: React.ReactElement;
  username?: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, text, icon, username }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center px-4 py-6 border transform transition-transform hover:-translate-y-1 cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md"
    >
      {icon}
      <span className="text-1xl font-medium text-white">{text}</span>
      {username && <span className="text-sm text-white">{username}</span>}
    </a>
  );
};

const contactLinks: ContactLinkProps[] = [
  {
    href: 'mailto:diegomarulanda87@gmail.com',
    text: 'Email',
    icon: <AiOutlineMail className="icon text-white" size={40} />,
     username:'diegomarulanda87@gmail.com',
    
  },
  {
    href: 'https://twitter.com/DAMB1987',
    text: 'Twitter',
    icon: <AiOutlineTwitter className="icon text-white" size={40} />,
    username: '@DAMB1987',
  },
  {
    href: 'https://www.linkedin.com/in/diegomarulandabarrientos/',
    text: 'LinkedIn',
    icon: <AiOutlineLinkedin className="icon text-white" size={40} />,
    username: 'diegomarulandabarrientos',
  },
  {
    href: 'https://github.com/DiegoMarulandaB',
    text: 'GitHub',
    icon: <AiOutlineGithub className="icon text-white" size={40} />,
    username: 'DiegoMarulandaB',
  },
];

export default Contact;
