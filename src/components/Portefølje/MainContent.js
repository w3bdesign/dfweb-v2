import React from "react"

import { Portfolio } from "../Animation/Portfolio.component"

function MainContent() {
  return (
    <>
      <div className="container mx-auto rounded">
        <div className="p-4 mx-auto mt-4 ">
          <div className="p-4 font-sans text-lg font-bold text-center text-white rounded bg-hero">
            Javascript
          </div>
        </div>
        <div className="grid gap-4 p-4 mt-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1 ">
          <Portfolio />
        </div>
        <div className="p-4 mx-auto mt-4 ">
          <div className="p-4 font-sans text-lg font-bold text-center text-white rounded bg-hero">
            React
          </div>
        </div>
        <div className="grid gap-4 p-4 mt-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1 ">
          <Portfolio />
        </div>
        <div className="p-4 mx-auto mt-4 ">
          <div className="p-4 font-sans text-lg font-bold text-center text-white rounded bg-hero">
            Woocommerce
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent
