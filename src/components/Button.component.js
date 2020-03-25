import React from "react"

export const Button = ({children}) => {
  return (
    <button className="px-4 py-4 bg-blue-600 rounded text-white hover:bg-blue-500">
      {children}
    </button>
  )
}
