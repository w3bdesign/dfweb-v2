import React from "react"

const Button = ({ children }) => (
  <button
    type="submit"
    className="p-4 m-4 text-white bg-gray-800 rounded hover:shadow-outline hover:bg-gray-600"
  >
    {children}
  </button>
)

export default Button
