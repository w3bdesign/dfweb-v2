import React, { useEffect, useRef } from "react"

import { Portfolio } from "./Portefølje.component"
import sr from "../../utils/scrollreveal"

const srConfig = (delay = 200) => ({
  origin: "bottom",
  distance: "20px",
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor: 0.25,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
})

function MainContent() {
  const firstRevealContainer = useRef(null)
  const secondRevealContainer = useRef(null)

  useEffect(() => {
    sr.reveal(firstRevealContainer.current, srConfig())
    sr.reveal(secondRevealContainer.current, srConfig())
  }, [])

  return (
    <>
      <main className="bg-graybg">
        <div className="container mx-auto rounded">
          <div className="mx-auto mt-4">
            <div className="p-4 text-2xl font-bold text-center text-black bg-white rounded shadow-lg">
              Javascript
            </div>
          </div>
          <div className="grid gap-4 pt-4 pb-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            <Portfolio />
          </div>
          <div className="mx-auto">
            <div className="p-4 font-sans text-2xl font-bold text-center text-black bg-white rounded shadow-lg">
              React
            </div>
          </div>
          <div
            className="grid gap-4 pt-4 pb-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1"
            ref={firstRevealContainer}
          >
            <Portfolio />
          </div>
          <div className="mx-auto">
            <div className="p-4 font-sans text-2xl font-bold text-center text-black bg-white rounded shadow-lg">
              Woocommerce
            </div>
          </div>
          <div
            className="grid gap-4 pt-4 pb-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1"
            ref={secondRevealContainer}
          >
            <Portfolio />
          </div>
        </div>
      </main>
    </>
  )
}

export default MainContent
