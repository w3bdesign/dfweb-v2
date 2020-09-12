import React from "react"

/**
 * Import all the SVGs from the SVG folder
 * Because we fade in the SVGs, we have no need for gatsby-image
 */

import WordpressSVG from "./SVG/Wordpress.SVG"
import DockerSVG from "./SVG/Docker.SVG"
import TypescriptSVG from "./SVG/Typescript.SVG"
import ReactSVG from "./SVG/React.SVG"
import PhotoshopSVG from "./SVG/Photoshop.SVG"

/**
 * Display technologies used as DevIcons SVG icons
 */
export default function SVGIcons() {
  return (
    <p className="flex justify-center mt-4 animate__animated animate__fadeInDown animate__delay-5s">
      <WordpressSVG />
      <DockerSVG />
      <TypescriptSVG />
      <ReactSVG />
      <PhotoshopSVG />
    </p>
  )
}
