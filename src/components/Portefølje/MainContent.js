import React from "react"

function MainContent() {
  return (
    <>
      <div className="container mx-auto rounded">
        <div className="container p-4 mx-auto mt-4 ">
          <div className="p-12 font-sans text-lg text-white rounded bg-hero">
            <p className="text-lg">Innhold Portefølje</p>
          </div>
        </div>
        <div className="grid gap-4 p-4 mt-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1 ">
          <div className="p-12 text-lg text-white rounded bg-hero">
            <p className="text-lg">Innhold Portefølje</p>
          </div>
          <div className="p-12 text-lg text-white rounded bg-hero">
            <p className="text-lg">Innhold Portefølje</p>
            <p className="text-lg">Innhold Portefølje</p>
          </div>
          <div className="p-12 text-lg text-white rounded bg-hero">
            <p className="text-lg">Innhold Portefølje</p>
            <p className="text-lg">Innhold Portefølje</p>
          </div>
          <div className="p-12 text-lg text-white rounded bg-hero">
            <p className="text-lg">Innhold Portefølje</p>
            <p className="text-lg">Innhold Portefølje</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent
