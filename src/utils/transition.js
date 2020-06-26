import React from "react"
import { motion, AnimatePresence } from "framer-motion"

/**
 * HOC function to display exit and enter animations with Framer-motion
 *
 * @param {Object} children JSX element(s) to animate
 */
const Transition = ({ children }) => {
  const duration = 1
  const delay = 0

  const variants = {
    initial: {
      opacity: 0,
    // opacity: 1
    },
    enter: {
      opacity: 1,
     
      transition: {
        duration: duration,
        delay: delay,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  return (
    <AnimatePresence>
      <motion.div
        key="animation"
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ position: "relative" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Transition
