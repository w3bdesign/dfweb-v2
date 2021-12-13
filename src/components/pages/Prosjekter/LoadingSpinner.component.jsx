import React from "react"

function BlueBouncingBall() {
  return (
    <>
      <div className="w-12 h-12 bg-blue-400 rounded-full" />
      <div className="w-12 h-12 bg-blue-400 rounded-full" />
      <div className="w-12 h-12 bg-blue-400 rounded-full" />
    </>
  )
}

/**
 * Loading spinner to show while loading projects
 */

function LoadingSpinner() {
  return (
    <>
      <h1 className="text-3xl text-center">Laster inn prosjekter ...</h1>
      <div className="mt-8 flex items-center justify-center space-x-4 animate-bounce h-64">
        <BlueBouncingBall />
      </div>
    </>
  )
}

export default LoadingSpinner
