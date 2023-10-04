'use client'

import React from 'react'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

const Contact = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-700 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center items-center justify-center mt-14">
          <h1 className="text-center mb-4">
            <AnimatedText text="Contact me" className="mr-2 mb-2  mt-2" />
          </h1>
          <p className="bg-slate-100 dark:bg-slate-700 mb-4 mt-6 text-center mx-2 mr-2 text-2xl text-pink-600">
            Get in touch with me through these links!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 mt-6 mx-2 mr-2">
          {contactLinks.map((link) => (
            <ContactLink key={link.text} {...link} />
          ))}
        </div>
      </div>

      <div className="flex flex-col text-center items-center justify-center py-3 sm:py-4 mt-4 mx-2 mr-2 ">
        <img loading="lazy" src="/avatar-1.png" alt="Contact me image" className="w-80 h-96 mx-2 mr-2 mt-10" />
      </div>
    </div>
  )
}

interface ContactLinkProps {
  href: string
  text: string
  username?: string
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, text, username }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center px-4 py-4 border transform transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md"
  >
    <span className="text-2xl font-medium text-white">{text}</span>
    {username && <span className="text-1xl font-bold text-white">{username}</span>}
  </a>
)

const contactLinks: ContactLinkProps[] = [
  {
    href: 'mailto:diegomarulanda87@gmail.com',
    text: 'Email',
    username: 'Send me an email!',
  },
  {
    href: 'https://twitter.com/DAMB1987',
    text: 'X',
    username: 'Follow me',
  },
  {
    href: 'https://www.linkedin.com/in/diegomarulandabarrientos/',
    text: 'LinkedIn',
    username: 'Follow me',
  },
  {
    href: 'https://github.com/DiegoMarulandaB?tab=repositories',
    text: 'GitHub',
    username: 'Follow me',
  },
]

export default Contact
