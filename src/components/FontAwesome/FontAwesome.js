import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWordpress,
  faHtml5,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import { v4 as uuidv4 } from "uuid"

const ICONS = [faWordpress, faHtml5, faJs, faReact, faGithub]

export const FontAwesome = () => {
  // We avoid repeating ourselves by using a map() here
  return (
    <p className="mt-4 text-center">
      {ICONS.map((icon) => (
        <FontAwesomeIcon
       
          className="m-2"
          key={uuidv4()}
          icon={icon}
          style={{ fontSize: "50px", maxHeight:"100px" }}
        />
      ))}
    </p>
  )
}

export default FontAwesome
