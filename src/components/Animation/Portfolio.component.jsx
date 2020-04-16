import * as React from "react"
//import { motion } from "framer-motion"

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.0,
      when: "beforeChildren",
      staggerChildren: 1.0,
    },
  },
}

export const Portfolio = () => (
  <>
    {[0, 1, 2, 3].map((index) => (
      <motion.div
        key={index}
        className="p-12 text-lg text-white rounded bg-hero"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <p className="m-2 text-lg">Innhold Portefølje</p>
        <motion.div>Les mer innhold</motion.div>
        
      </motion.div>
    ))}
  </>
)
