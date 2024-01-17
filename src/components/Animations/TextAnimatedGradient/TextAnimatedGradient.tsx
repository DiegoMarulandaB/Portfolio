import { motion } from 'framer-motion'

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
      className="inline-flex animate-text-gradient bg-gradient-to-r
        from-[#60a5fa] via-[#2563eb] to-[#93c5fd] dark:from-[#fde68a] dark:via-[#f8fafc] dark:to-[#fde68a] bg-[200%_auto] bg-clip-text text-transparent mx-2 mr-2 mt-28 font-extrabold capitalize text-4xl sm:text-7xl md:text-6xl lg:text-6xl xl:text-7xl"
    >
      <motion.h1>Dive into the world of code and creativity!</motion.h1>
    </motion.div>
  )
}

export default TextAnimatedGradient
