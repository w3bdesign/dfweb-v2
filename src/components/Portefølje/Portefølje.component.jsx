import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWordpress,
  faHtml5,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import PROJECTS from "../../constants/PROJECTS"

import reactimage from "../../../static/react.webp"

export const Portfolio = () => (
  <>
    {PROJECTS.map(
      ({
        name,
        description,
        subdescription,
        category,
        urlwww,
        urlgithub,
        fontawesome,
        image,
      }) => (
        <div
          key={name}
          className="p-12 text-lg text-black bg-white rounded shadow-lg"
        >
          <p className="text-center">
            <FontAwesomeIcon
              className="m-2 text-black"
              icon={faReact}
              style={{ fontSize: "50px" }}
            />
          </p>
          <p className="text-lg text-center">{name}</p>
          <div className="mt-6 text-lg text-left">
            <p>{description}</p>

            <p className="mt-6">{subdescription}</p>

            <p className="mt-6">
              <img src={reactimage} alt="React" />
            </p>
            <div className="flex justify-center mt-4">
              <a href={urlgithub}>
                <button className="p-4 m-4 text-white rounded bg-button hover:shadow-outline hover:bg-gray-700">
                  Github
                </button>
              </a>
              <a href={urlwww}>
                <button className="p-4 m-4 text-white rounded bg-button hover:shadow-outline hover:bg-gray-700">
                  Besøk
                </button>
              </a>
            </div>
          </div>
        </div>
      )
    )}
  </>
)
