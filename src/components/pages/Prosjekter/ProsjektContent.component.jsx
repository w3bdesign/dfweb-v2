import React, { useState, useEffect } from "react"

import fetch from "node-fetch"
import Fade from "react-reveal-effects/Fade"

import ProsjektProjects from "./ProsjektProjects.component"
import CATEGORIES from "../../../constants/CATEGORIES"

import LoadingSpinner from "./LoadingSpinner.component"

/**
 * Fetch portfolio projects from GraphQL
 * Also uses React-reveal-effects for displaying projects during scrolling
 * Displays portfolio entries based on the projects filter prop passed to Portfolio
 */
function ProsjektContent() {
  /**
   * Setup filter funtionality to only show projects from the selected category
   */
  const [categoryFilter, setcategoryFilter] = useState()
  /**
   * Should we fade in portfolio projects that are filtered?
   */
  const [shouldAnimate, setshouldAnimate] = useState(false)
  /**
   * Should we show loading spinner?
   */
  const [loading, setLoading] = useState(true)
  /**
   * Show error while fetching projects
   */
  const [error, setError] = useState()

  /**
   * Fetch project data from API
   */
  const [allProjects, setAllProjects] = useState([])
  useEffect(() => {
    // Get data from Gatsby local function
    fetch(`/api/projects`)
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setLoading(false)
        setAllProjects(resultData.data)
      })
      .catch(() => {
        setError("Feil under henting av prosjektdata")
      })
  }, [])

  const handleFilterChange = (e) => {
    /**
     * Eslint seems to complain if I replace this with a ternary
     */
    if (e.target.value) {
      setcategoryFilter(e.target.value)
    } else {
      setcategoryFilter(null)
    }

    /**
     * By using a setTimeout to switch the shouldAnimate boolean value we get a fade effect when switching filters
     */
    setshouldAnimate(false)

    setTimeout(() => {
      setshouldAnimate(true)
    }, 500)
  }

  return (
    <main aria-label="Innhold portefølje" className="mt-32 bg-graybg">
      <div className="container mx-auto rounded">
        <div className="px-4 mx-auto mt-4 lg:px-0 xl:px-0 md:px-0">
          <span className="flex justify-end mb-4">
            <form>
              <label
                className="p-2 mr-4 text-lg"
                aria-label="kategorifilter"
                htmlFor="kategorifilter"
              >
                Filtrer kategori:
              </label>
              <select
                id="kategorifilter"
                name="kategorifilter"
                onChange={handleFilterChange}
                className="w-40 p-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              >
                <option label="" value="">
                  Ingen filtrering
                </option>
                {CATEGORIES?.map(({ id, name }) => (
                  <option key={id} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </form>
          </span>

          {error && (
            <h2 className="text-3xl mt-24 h-96 text-center">{error}</h2>
          )}

          {loading && !error && <LoadingSpinner />}

          {!loading && (
            <>
              <Fade when={shouldAnimate}>
                {categoryFilter && allProjects && (
                  <>
                    <div
                      id="categoryFilterDiv"
                      className="p-4 text-2xl font-bold text-center text-black bg-white rounded shadow"
                    >
                      <h1>{categoryFilter}</h1>
                    </div>
                    <div
                      id="prosjektgrid"
                      className="grid gap-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1"
                    >
                      <ProsjektProjects
                        filter={categoryFilter}
                        projects={allProjects}
                      />
                    </div>
                  </>
                )}
              </Fade>
              <Fade>
                {!categoryFilter &&
                  allProjects &&
                  CATEGORIES.map(({ id, name }) => (
                    <div key={id}>
                      <div
                        id="categoryFilterDiv"
                        className="p-4 text-2xl font-bold text-center text-black bg-white rounded shadow"
                      >
                        <h1>{name}</h1>
                      </div>
                      <div
                        id="prosjektgrid"
                        className="grid gap-4 pt-4 pb-4 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1"
                      >
                        <ProsjektProjects
                          filter={name}
                          projects={allProjects}
                        />
                      </div>
                    </div>
                  ))}
              </Fade>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default ProsjektContent
