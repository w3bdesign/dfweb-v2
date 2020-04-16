import * as React from "react"
//import { motion } from "framer-motion"

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

/*
const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
}
*/

const container = {
  hidden: { opacity: 0, scale: 0, y:"100%" },
  visible: {
    opacity: 1,
    scale: 1,
    y:"0%",
    transition: {
      delay: 1,
      staggerChildren: 1,
      ease: "easeInOut",
     
    },
  },
}

const transition = {
  duration: 1,
  ease: "easeInOut",
  staggerChildren: 1,
}

export const Portfolio = () => (
  <>
    {[0, 1, 2, 3].map((index) => (
      <motion.div
        key={index}
        className="p-12 text-lg text-white rounded bg-hero"
        variants={container}
        transition={{duration: index}}
        initial="hidden"
        animate="visible"
      >
        <p className="text-lg text-center">Innhold Portefølje</p>
        <motion.div variants={container} initial="hidden" animate="visible" className="text-lg text-center">Les mer innhold</motion.div>
      </motion.div>
    ))}
  </>
)
