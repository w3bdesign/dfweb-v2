import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWordpress,
  faHtml5,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import { faCopyright } from "@fortawesome/free-regular-svg-icons"

import { v4 as uuidv4 } from "uuid"

const ICONS = [faWordpress, faHtml5, faJs, faReact, faGithub]

/**
 * Display technologies used as FontAwesome SVG icons
 */

export const FontAwesome = () => {
  // We avoid repeating ourselves by using a map() here
  return (
    <p className="mt-4 text-center animate__animated animate__fadeInDown animate__delay-5s">
      {ICONS.map((icon) => (
        <FontAwesomeIcon
          className="m-2"
          key={uuidv4()}
          icon={icon}
          style={{ fontSize: "50px" }}
        />
      ))}
    </p>
  )
}

export const FontAwesomeCopyright = () => {
  return (
    <FontAwesomeIcon
      className="mt-2"
      icon={faCopyright}
      style={{ fontSize: "20px" }}
    />
  )
}

export default FontAwesome
