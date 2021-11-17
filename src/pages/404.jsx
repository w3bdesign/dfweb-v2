import React from "react"

// Layout
import Layout from "../components/layout/Header/Layout.component"

const ErrorPage = function ErrorPage() {
  return (
    <Layout>
      <div className="mx-auto mt-32 rounded lg:mt-32 xl:mt-32 bg-graybg shadow-large md:mt-32 sm:mt-64 xs:mt-64">
        <h1 className="h-32 m-12 mx-auto text-2xl text-center">
          Oppps... noe gikk galt
          <br />
          Vennligst prøv en annen addresse
        </h1>
      </div>
    </Layout>
  )
}

export default ErrorPage
