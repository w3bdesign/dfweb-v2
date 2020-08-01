import React from "react"

/**
 * Common button component used by several pages
 *
 * @param {Object} text Text passed into the button
 */

export default function Button({ text }) {
  return (
    <button
      type="submit"
      className="p-4 m-4 text-white bg-gray-800 rounded hover:shadow-outline hover:bg-gray-600"
    >
      {text}
    </button>
  )
}
