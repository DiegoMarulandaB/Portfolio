import { motion } from 'framer-motion'
import React from 'react'

const TextAnimatedGradient = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: '-100%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.85,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className="span-text-animation inline-flex bg-clip-text ml-2 mx-1 mr-2 mb-4 pt-32"
    >
      <motion.span>I transform your idea into an impressive website!</motion.span>
    </motion.div>
  )
}

export default TextAnimatedGradient
