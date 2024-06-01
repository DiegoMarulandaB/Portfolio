import { motion } from 'framer-motion'
import React from 'react'
const TextAnimatedGradient = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: '200%',
    },
    visible: {
      opacity: 1,
      y: 0,
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
      className="heading-1 inline-flex  mx-1 mr-1 mt-32 bg-clip-text "
    >
      <motion.h1>Dive into the world of code and creativity!</motion.h1>
    </motion.div>
  )
}

export default TextAnimatedGradient
