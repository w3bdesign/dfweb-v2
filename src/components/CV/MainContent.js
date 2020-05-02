import React from "react"
import { Document, Page, pdfjs } from "react-pdf"

import myCV from "../../../static/CV-dfweb.pdf"

// https://github.com/wojtekmaj/react-pdf#enable-pdfjs-worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function MainContent() {
  const page = {
    pageNumber: 1,
  }

  return (
    <>
      <main id="maincontent">
        <div className="bg-graybg">
          <div className="container mx-auto bg-white rounded shadow-lg">
            <div className="p-4 mx-auto mt-4">
              <div className="p-4 text-lg rounded">
                <h3 className="m-2 text-3xl text-center text-black">CV</h3>

                <div className="mt-0 sm:mt-2 xs:mt-2">
                  <Document
                    className="hidden mt-4 xl:block lg:block"
                    error="En feil har oppstått under lasting av PDF"
                    loading="Laster inn PDF ..."
                    file={myCV}
                  >
                    <Page
                      renderMode="svg"
                      className="flex content-center justify-center"
                      scale="1.5"
                      pageNumber={page.pageNumber}
                    />
                  </Document>
                </div>

                <div className="mx-auto mt-0 text-center sm:mt-2 xs:mt-2">
                  <button className="p-4 text-white rounded bg-button hover:shadow-outline">
                    <a href={myCV}>Last ned PDF</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default MainContent
