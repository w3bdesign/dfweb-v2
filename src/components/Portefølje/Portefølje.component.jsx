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
          data-sal="fade"
          data-sal-delay="1000"
          data-sal-easing="ease"
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
            <div className="flex justify-center">
              <a href={urlgithub}>
                <button className="px-8 py-4 mt-6 ml-4 font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
                  Github
                </button>
              </a>
              <a href={urlwww}>
                <button className="px-8 py-4 mt-6 ml-4 font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
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
