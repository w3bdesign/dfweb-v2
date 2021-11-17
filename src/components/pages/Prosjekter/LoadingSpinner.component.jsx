import React from "react"

/**
 * Loading spinner to show while loading projects
 */

const LoadingSpinner = function LoadingSpinner() {
  return (
    <>
      <h1 className="text-3xl text-center">Laster inn prosjekter ...</h1>
      <div className="mt-8 flex items-center justify-center space-x-4 animate-bounce h-64">
        <div className="w-16 h-16 bg-blue-400 rounded-full" />
        <div className="w-16 h-16 bg-blue-400 rounded-full" />
        <div className="w-16 h-16 bg-blue-400 rounded-full" />
      </div>
    </>
  )
}

export default LoadingSpinner
