import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWordpress,
  faHtml5,
  faJs,
  faReact,
  faGithub
} from "@fortawesome/free-brands-svg-icons"

export const FontAwesome = () => {
  return (
    <p className="mt-4 text-center">
      <FontAwesomeIcon
        className="m-2"
        icon={faWordpress}
        style={{ fontSize: "50px" }}
      />
      <FontAwesomeIcon
        className="m-2"
        icon={faHtml5}
        style={{ fontSize: "50px" }}
      />
      <FontAwesomeIcon
        className="m-2"
        icon={faJs}
        style={{ fontSize: "50px" }}
      />
      <FontAwesomeIcon
        className="m-2"
        icon={faReact}
        style={{ fontSize: "50px" }}
      />
      <FontAwesomeIcon
        className="m-2"
        icon={faGithub}
        style={{ fontSize: "50px" }}
      />
    </p>
  )
}

export default FontAwesome;