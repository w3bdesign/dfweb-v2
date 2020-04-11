import * as React from "react"
import { motion } from "framer-motion"

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(0, 0, 0, 1)",
  },
}

export const AnimatedLogo = () => (
  <div className="container" style={{ height: "100px" }}>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
    >
      <motion.path
        d="M21.252,29.868l22.367,-22.368c7.318,7.317 7.318,19.181 0,26.498l-22.367,22.369c-7.318,-7.318 -7.318,-19.182 0,-26.499l0,0Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M43.603,52.252l-7.189,-7.19l-15.179,-15.178c-4.982,4.983 -6.569,12.07 -4.766,18.398c0.845,2.966 2.43,5.765 4.766,8.1l22.368,22.368c7.317,-7.317 7.317,-19.181 0,-26.498l0,0Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M88.778,29.868l-22.367,-22.368c-7.317,7.317 -7.317,19.181 0,26.498l22.367,22.369c7.318,-7.318 7.318,-19.182 0,-26.499l0,0Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M66.427,52.252l7.19,-7.19l15.178,-15.178c4.981,4.983 6.568,12.07 4.766,18.398c-0.845,2.966 -2.431,5.765 -4.766,8.1l-22.368,22.368c-7.318,-7.317 -7.318,-19.181 0,-26.498l0,0Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.text x="131.866px" y="49.128px" style={{"fill":"#000"}}>
        DFWEB
      </motion.text>
    </motion.svg>
  </div>
)
