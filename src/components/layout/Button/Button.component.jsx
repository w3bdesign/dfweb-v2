import React from "react"
import PropTypes from "prop-types"

/**
 * Common button component used by several pages
 *
 * @param {Object} children Text passed into the button
 */

export default function Button({ children }) {
  return (
    <button
      type="submit"
      className="p-4 m-4 text-white bg-gray-800 rounded hover:shadow-outline hover:bg-gray-600"
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}