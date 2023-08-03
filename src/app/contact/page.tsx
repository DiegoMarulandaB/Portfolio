'use client'

import React from 'react'
import { AiOutlineMail, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

const Contact: React.FC = () => (
  <div className="bg-slate-100 dark:bg-slate-700 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col text-center items-center justify-center mt-14">
        <h2 className="text-center mb-4">
          <AnimatedText text="Contact me" className="mr-2 mb-2  mt-2" />
        </h2>
        <p className="bg-slate-100 dark:bg-slate-700 mb-4 mt-2 text-center mx-2 mr-2 text-2xl text-pink-600">
          Get in touch with me through these links!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 mt-2 mx-2 mr-2">
        {contactLinks.map((link) => (
          <ContactLink key={link.text} {...link} />
        ))}
      </div>
    </div>
  </div>
)

interface ContactLinkProps {
  href: string
  text: string
  icon: React.ReactElement
  username?: string
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, text, icon, username }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center px-4 py-4 border transform transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md"
  >
    {icon}
    <span className="text-1xl font-medium text-white">{text}</span>
    {username && <span className="text-1xl font-bold text-white">{username}</span>}
  </a>
)

const contactLinks: ContactLinkProps[] = [
  {
    href: 'mailto:diegomarulanda87@gmail.com',
    text: 'Email',
    icon: (
      <AiOutlineMail
        className="icon text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 border-2 rounded-md"
        size={42}
      />
    ),
    username: 'Send me an email!',
  },
  {
    href: 'https://twitter.com/DAMB1987',
    text: 'Twitter',
    icon: (
      <AiOutlineTwitter
        className="icon text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 border-2 rounded-md"
        size={42}
      />
    ),
    username: 'Follow me',
  },
  {
    href: 'https://www.linkedin.com/in/diegomarulandabarrientos/',
    text: 'LinkedIn',
    icon: <AiOutlineLinkedin className="icon text-white bg-blue-600 border-2 rounded-md" size={42} />,
    username: 'Follow me',
  },
  {
    href: 'https://github.com/DiegoMarulandaB?tab=repositories',
    text: 'GitHub',
    icon: (
      <AiOutlineGithub
        className="icon text-white bg-gradient-to-r from-gray-700 via-gray-700 to-gray-700 border-2  rounded-md"
        size={42}
      />
    ),
    username: 'Follow me',
  },
]

export default Contact
