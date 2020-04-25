import * as React from "react"

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

import PROJECTS from "../../constants/PROJECTS"

import reactimage from "../../../static/react.webp"

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
  hidden: { opacity: 0, scale: 0, y: "100%" },
  visible: {
    opacity: 1,
    scale: 1,
    y: "0%",
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
// https://codesandbox.io/s/framer-motion-magic-expand-hwugd?file=/src/App.js
export const Portfolio = () => (
  <>
    {PROJECTS.map(({ name, description, subdescription, category, image }) => (
      <motion.div
        key={name}
        className="p-12 text-lg text-black bg-white rounded shadow-lg"
        variants={container}
        transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
      >
        <p className="text-lg text-center">{name}</p>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-6 text-lg text-left"
        >
          <p>{description}</p>

          <p className="mt-6">{subdescription}</p>

          <p className="mt-6">{category}</p>

          <p className="mt-6">
            <img src={reactimage} alt="React" />
          </p>
        </motion.div>
      </motion.div>
    ))}
  </>
)
