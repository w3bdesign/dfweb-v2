import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Fade from "react-reveal-effects/Fade"

import Portfolio from "./PorteføljeProjects.component"
import CATEGORIES from "../../constants/CATEGORIES"

/**
 * Fetch portfolio projects from GraphQL
 * Also uses React-reveal-effects for displaying projects during scrolling
 * Displays portfolio entries based on the projects filter prop passed to Portfolio
 */
function PorteføljeContent() {
  /**
   * Setup filter funtionality to only show projects from the selected category
   */
  const [categoryFilter, setcategoryFilter] = useState()
  /**
   * Should we fade in portfolio projects that are filtered?
   */
  const [shouldAnimate, setshouldAnimate] = useState(false)

  /**
   * GraphQL setup
   */
  const projectData = useStaticQuery(ALL_PROJECTS_QUERY)
  const { allProjects } = projectData.Project

  const handleFilterChange = (e) => {
    e.target.value ? setcategoryFilter(e.target.value) : setcategoryFilter(null)

    /**
     * By using a setTimeout to switch the shouldAnimate boolean value we get a fade effect when switching filters
     */
    setshouldAnimate(false)

    setTimeout(() => {
      setshouldAnimate(true)
    }, 1000)
  }

  return (
    <main aria-label="Innhold portefølje" className="mt-24 bg-graybg">
      <div className="container mx-auto rounded">
        <div className="px-4 mx-auto mt-4 lg:px-0 xl:px-0 md:px-0">
          <span className="flex justify-end mb-4">
            <label htmlFor="Kategorifilter" className="p-2 mr-4 text-lg">
              Filtrer kategori:
            </label>
            <select id="Kategorifilter" onChange={handleFilterChange} className="w-40 p-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
              <option value="">Ingen filtrering</option>
              <option value="Javascript">Javascript</option>
              <option value="Magento">Magento</option>
              <option value="React">React</option>
              <option value="WooCommerce">WooCommerce</option>
            </select>
          </span>
          <Fade when={shouldAnimate}>
            {categoryFilter && (
              <>
                <div className="p-4 text-2xl font-bold text-center text-black bg-white rounded shadow">
                  {categoryFilter}
                </div>
                <div className="grid gap-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
                  <Portfolio filter={categoryFilter} projects={allProjects} />
                </div>
              </>
            )}
          </Fade>
          <Fade>
            {!categoryFilter &&
              CATEGORIES.map(({ id, name }) => (
                <div key={id}>
                  <div className="p-4 text-2xl font-bold text-center text-black bg-white rounded shadow">
                    {name}
                  </div>
                  <div className="grid gap-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
                    <Portfolio filter={name} projects={allProjects} />
                  </div>
                </div>
              ))}
          </Fade>
        </div>
      </div>
    </main>
  )
}

export default PorteføljeContent

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
