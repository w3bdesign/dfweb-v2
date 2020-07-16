import React, { useEffect, useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Portfolio } from "./Portefølje.component"
import ScrollShow from "../../utils/scrollshow"

const ALL_PROJECTS_QUERY = graphql`
  query MyQuery {
    Project {
      allProjects {
        id
        image
        name
        subdescription
        urlgithub
        urlwww
        category
        description
      }
    }
  }
`

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

/**
 * Fetch portfolio projects from GraphQL
 * Also uses ScrollReveal for displaying projects during scrolling
 * Displays portfolio entries based on the projects filter prop passed to Portfolio
 */
function PorteføljeContent() {
  /**
   * Setup filter funtionality to only show projects from the selected category
   */
  const [categoryFilter, setcategoryFilter] = useState()

  /**
   * Setup references to containers so we can use ScrollReveal
   */
  const firstRevealContainer = useRef(null)
  const secondRevealContainer = useRef(null)

  /**
   * GraphQL setup
   */
  const projectData = useStaticQuery(ALL_PROJECTS_QUERY)
  const { allProjects } = projectData.Project

  const handleFilterChange = (e) => {
    e.target.value ? setcategoryFilter(e.target.value) : setcategoryFilter(null)
    //alert(categoryFilter)
  }

  useEffect(() => {
    ScrollShow.reveal(firstRevealContainer.current, srConfig())
    ScrollShow.reveal(secondRevealContainer.current, srConfig())
  }, [])
  return (
    <main className="mt-24 bg-graybg">
      <div className="container mx-auto rounded">
        <div className="px-4 mx-auto mt-4 lg:px-0 xl:px-0 md:px-0">
          <span className="flex justify-end mb-4">
            <label className="mr-4 text-lg">
              Velg kategori for å filtrere:
            </label>
            <select onChange={handleFilterChange}>
              <option value=""></option>
              <option value="React">React</option>
              <option value="Javascript">Javascript</option>
              <option value="Woocommerce">WooCommerce</option>
            </select>
          </span>

          {categoryFilter && (
            <>
              <div className="p-4 text-2xl font-bold text-center text-black bg-white rounded shadow-lg">
                {categoryFilter}
              </div>

              <div className="grid gap-4 px-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
                <Portfolio filter={categoryFilter} projects={allProjects} />
              </div>
            </>
          )}

          {!categoryFilter && (
            <>
              <div className="p-4 text-2xl font-bold text-center text-black bg-white rounded shadow-lg">
                React
              </div>

              <div className="grid gap-4 px-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
                <Portfolio filter="React" projects={allProjects} />
              </div>

              <div className="px-4 mx-auto lg:px-0 xl:px-0 md:px-0">
                <div className="p-4 font-sans text-2xl font-bold text-center text-black bg-white rounded shadow-lg">
                  Javascript
                </div>
              </div>
              <div
                className="grid gap-4 px-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1"
                ref={firstRevealContainer}
              >
                <Portfolio filter="Javascript" projects={allProjects} />
              </div>
              <div className="px-4 mx-auto lg:px-0 xl:px-0 md:px-0">
                <div className="p-4 font-sans text-2xl font-bold text-center text-black bg-white rounded shadow-lg">
                  WooCommerce
                </div>
              </div>
              <div
                className="grid gap-4 px-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1"
                ref={secondRevealContainer}
              >
                <Portfolio filter="Woocommerce" projects={allProjects} />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default PorteføljeContent
