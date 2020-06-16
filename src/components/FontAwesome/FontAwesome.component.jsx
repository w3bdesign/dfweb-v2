import React, { useState } from "react"
import { nanoid } from "nanoid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWordpress,
  faHtml5,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const ICONS = [faWordpress, faHtml5, faJs, faReact, faGithub]

export const FontAwesome = () => {
  const [uniqueId] = useState(nanoid)

  // We avoid repeating ourselves by using a map() here
  return (
    <p className="mt-4 text-center">
      {ICONS.map((icon) => (
        <FontAwesomeIcon
          className="m-2"
          key={uniqueId}
          icon={icon}
          style={{ fontSize: "50px" }}
        />
      ))}
    </p>
  )
}

export default FontAwesome
