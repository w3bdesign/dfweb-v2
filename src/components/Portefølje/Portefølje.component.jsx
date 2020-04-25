import * as React from "react"

import PROJECTS from "../../constants/PROJECTS"

import reactimage from "../../../static/react.webp"

export const Portfolio = () => (
  <>
    {PROJECTS.map(({ name, description, subdescription, category, image }) => (
      <div
        key={name}
        className="p-12 text-lg text-black bg-white rounded shadow-lg"
      >
        <p className="text-lg text-center">{name}</p>
        <div className="mt-6 text-lg text-left">
          <p>{description}</p>

          <p className="mt-6">{subdescription}</p>

          <p className="mt-6">{category}</p>

          <p className="mt-6">
            <img src={reactimage} alt="React" />
          </p>
        </div>
      </div>
    ))}
  </>
)
