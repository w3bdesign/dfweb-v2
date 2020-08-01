import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

import { ICONS } from "../../../constants/ICONS"

/**
 * Display technologies used as FontAwesome SVG icons
 */

export default function FontAwesome() {
  // We avoid repeating ourselves by using a map() here
  return (
    <p className="mt-4 text-center animate__animated animate__fadeInDown animate__delay-5s">
      {ICONS.map(({ id, icon }) => (
        <FontAwesomeIcon
          className="m-2"
          key={id}
          icon={icon}
          style={{ fontSize: "50px" }}
        />
      ))}
    </p>
  )
}

export function FontAwesomeCopyright() {
  return (
    <FontAwesomeIcon
      className="mt-2"
      icon={faCopyright}
      style={{ fontSize: "15px" }}
    />
  )
}
