import React from "react"

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
