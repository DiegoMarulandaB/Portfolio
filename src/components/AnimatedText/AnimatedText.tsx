import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.08,
    },
  },
}

const singelWord = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.08,
    },
  },
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => (
  <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
    <motion.h1
      className={`inline-block w-full text-dark font-extrabold capitalize text-4xl sm:text-7xl md:text-6xl lg:text-6xl xl:text-7xl ${className}`}
      variants={quote}
      initial="initial"
      animate="animate"
    >
      {text.split(' ').map((word, index) => (
        <motion.span key={`${word}-${index}`} className="inline-block" variants={singelWord}>
          {word}
          &nbsp;
        </motion.span>
      ))}
    </motion.h1>
  </div>
)

export default AnimatedText
