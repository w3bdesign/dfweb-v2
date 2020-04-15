import * as React from "react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const Portfolio = () => (
  <>
    
    
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="p-12 text-lg text-white rounded bg-hero"
          variants={item}
          initial="hidden"
      animate="visible"
        >
          <p className="text-lg">Innhold Portefølje</p>
        </motion.div>
      ))}
    
  </>
)
