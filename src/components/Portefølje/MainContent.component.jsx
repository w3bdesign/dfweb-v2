import React from "react"

import { Portfolio } from "./Portefølje.component"

function MainContent() {
  return (
    <>
      <main className="bg-graybg">
        <div className="container mx-auto rounded">
          <div className="p-4 mx-auto mt-4 ">
            <div className="p-4 font-sans text-lg font-bold text-center text-black bg-white rounded shadow-lg reveal">
              Javascript
            </div>
          </div>
          <div className="grid gap-4 p-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            <Portfolio />
          </div>
          <div className="p-4 mx-auto mt-4 ">
            <div className="p-4 font-sans text-lg font-bold text-center text-black bg-white rounded shadow-lg reveal">
              React
            </div>
          </div>
          <div className="grid gap-4 p-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            <Portfolio />
          </div>
          <div className="p-4 mx-auto mt-4 ">
            <div className="p-4 font-sans text-lg font-bold text-center text-black bg-white rounded shadow-lg reveal">
              Woocommerce
            </div>
          </div>
          <div className="grid gap-4 p-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            <Portfolio />
          </div>
        </div>
      </main>
    </>
  )
}

export default MainContent
