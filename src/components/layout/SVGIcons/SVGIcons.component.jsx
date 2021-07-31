import React from "react"

/**
 * Import all the SVGs from the SVG folder
 * Because we fade in the SVGs, we have no need for gatsby-image
 */

import WordpressSVG from "./SVG/WordpressSVG"
import VueSVG from "./SVG/VueSVG"
import TypescriptSVG from "./SVG/TypescriptSVG"
import ReactSVG from "./SVG/ReactSVG"
import PhotoshopSVG from "./SVG/PhotoshopSVG"

/**
 * Display technologies used as DevIcons SVG icons
 */
export default function SVGIcons() {
  return (
    <p className="flex justify-center mt-4">
      <WordpressSVG />
      <VueSVG />
      <TypescriptSVG />
      <ReactSVG />
      <PhotoshopSVG />
    </p>
  )
}
