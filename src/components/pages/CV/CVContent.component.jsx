import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../../layout/Button/Button.component"
import myCV from "../../../assets/CV-dfweb.pdf"

/**
 * Displays the CV content using react-pdf
 * On mobile, we only show a link to display the PDF directly
 */

export default function CVContent() {
  return (
    <>
      <main id="maincontent">
        <div className="mt-24 bg-graybg">
          <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
            <div className="container mx-auto bg-white rounded shadow">
              <div className="p-4 mx-auto mt-4">
                <div className="p-4 text-lg rounded">
                  <h3 className="m-2 text-3xl text-center text-black">CV</h3>
                  <div className="mt-0 sm:mt-2 xs:mt-2">
                    <a rel="noopener noreferrer" target="_blank" href={myCV}>
                      <StaticImage
                        src="../../../images/cv-side1.jpg"
                        alt="CV side 1"
                        placeholder="blurred"
                        className="hidden mt-4 text-center xl:block lg:block"
                      />
                      <StaticImage
                        src="../../../images/cv-side2.jpg"
                        alt="CV side 2"
                        placeholder="blurred"
                        className="hidden mt-4 text-center xl:block lg:block"
                      />
                    </a>
                  </div>
                  <div className="mx-auto mt-0 text-center sm:mt-2 xs:mt-2">
                    <Button>
                      <a rel="noopener noreferrer" target="_blank" href={myCV}>
                        Last ned PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
