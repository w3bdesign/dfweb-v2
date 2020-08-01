import React from "react"
import { Document, Page,  pdfjs } from "react-pdf"

import Button from "../../layout/Button/Button.component"
import myCV from "../../../assets/CV-dfweb.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
                    <Document
                      className="hidden mt-4 text-center xl:block lg:block"
                      error="En feil har oppstått under lasting av PDF"
                      loading="Laster inn PDF ..."
                      file={myCV}
                    >
                      <Page
                        renderMode="svg"
                        className="flex content-center justify-center"
                        scale={1.5}
                        pageNumber={1}
                      />
                    </Document>
                  </div>
                  <div className="mx-auto mt-0 text-center sm:mt-2 xs:mt-2">
                    <Button>
                      <a href={myCV}>Last ned PDF</a>
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
