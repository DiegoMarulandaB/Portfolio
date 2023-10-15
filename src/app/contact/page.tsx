'use client'

import React from 'react'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="text-center pt-20 ">
        <AnimatedText text="Contact me" className="mx-2 mr-2 mb-2 mt-6 " />
      </h1>
      <div className="flex flex-col text-center items-center justify-center mx-4 mr-4">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-full mx-auto pb-80 ">
            <p className=" mt-6 text-center mx-2 mr-2 text-3xl text-pink-600">
              Get in touch with me through these links!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mx-2 mr-2 mt-20 rounded-3xl">
              {contactLinks.map((link) => (
                <ContactLink key={link.text} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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
    className="flex flex-col items-center text-center text-white bg-gradient-to-r bg-white dark:bg-slate-600 rounded-3xl px-4 py-4 mx-2 mr-2 mt-10 w-26 text-2xl  font-bold"
  >
    <span className="text-2xl font-bold text-neutral-800 dark:text-neutral-50 ">{text}</span>
    {username && (
      <span className="text-1xl text-neutral-800 dark:text-neutral-50   hover:text-cyan-500  dark:hover:text-cyan-400 transition-transform cursor-pointer text-sm font-bold uppercase mt-4">
        {username}
      </span>
    )}
  </a>
)

const contactLinks: ContactLinkProps[] = [
  {
    href: 'https://twitter.com/DAMB1987',
    text: 'X',
    username: 'Follow me →',
  },
  {
    href: 'https://www.linkedin.com/in/diegomarulandabarrientos/',
    text: 'LinkedIn',
    username: 'Follow me →',
  },
  {
    href: 'https://github.com/DiegoMarulandaB?tab=repositories',
    text: 'Github',
    username: 'Follow me →',
  },
]
export default Contact
