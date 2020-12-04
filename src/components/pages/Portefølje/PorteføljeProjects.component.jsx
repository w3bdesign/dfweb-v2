import React from "react"
import PropTypes from "prop-types"

import Button from "../../layout/Button/Button.component"

/**
 * Display individual portfilio projects if they match the filter passed down through props
 *
 * @param {Object} filter The filter that we apply to the component so we only displays projects from the correct category
 * @param {Object} projects The portfolio project data to display, contains name, image etc
 */
export default function PorteføljeProjects({ filter, projects }) {
  return (
    <>
      {projects.map(
        ({
          id,
          name,
          description,
          subdescription,
          category,
          urlwww,
          urlgithub,
          image,
        }) => {
          // Use ternary to apply filter so we only see projects from the relevant category
          return filter === category ? (
            <div
              key={id}
              className="p-6 text-lg text-black bg-white rounded shadow xl:p-12 lg:p-12 md:p-12"
            >
              <p className="text-xl font-black text-center">{name}</p>
              <div className="mt-6 text-lg text-left lg:text-center">
                <p>{description}</p>
                <p className="mt-6 text-left lg:text-center">{subdescription}</p>
                <div className="flex justify-center mt-6">
                  <img src={image} alt={name} />
                </div>
                <div className="flex justify-center mt-4">
                  {/* Display only Github button if not empty  */}
                  {urlgithub && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                      href={urlgithub}
                    >
                      <Button>Github</Button>
                    </a>
                  )}
                  {urlwww && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                      href={urlwww}
                    >
                      <Button>Besøk</Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : null
        }
      )}
    </>
  )
}

PorteføljeProjects.propTypes = {
  filter: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.object),
}

PorteføljeProjects.defaultProps = {
  filter: null,
  projects: null,
}
