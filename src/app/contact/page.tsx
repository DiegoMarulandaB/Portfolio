'use client'

import React from 'react'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

const Contact = () => {
  return (
    <div className="pt-20 lg:pt-[100px] pb-12 lg:pb-[100px] overflow-hidden">
      <div className="bg-slate-100 dark:bg-slate-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center items-center justify-center mt-14">
          <h1 className="text-center mb-4">
            <AnimatedText text="Contact me" className="mr-2 mb-2  mt-2" />
          </h1>
          <p className=" mb-4 mt-6 text-center mx-2 mr-2 text-2xl text-pink-600">
            Get in touch with me through these links!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 mr-2 mt-10 rounded-3xl">
          {contactLinks.map((link) => (
            <ContactLink key={link.text} {...link} />
          ))}
        </div>
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
    className="flex flex-col items-center text-center text-white bg-gradient-to-r bg-white dark:bg-slate-600 rounded-3xl px-4 py-4 mx-2 mr-2 mt-4 w-26 text-2xl  font-bold"
  >
    <span className="text-1xl font-bold text-neutral-800 dark:text-neutral-50 ">{text}</span>
    {username && (
      <span className="text-1xl text-neutral-800 dark:text-neutral-50   hover:text-cyan-500  dark:hover:text-cyan-400 transition-transform cursor-pointer text-sm font-bold uppercase">
        {username}
      </span>
    )}
  </a>
)

const contactLinks: ContactLinkProps[] = [

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
