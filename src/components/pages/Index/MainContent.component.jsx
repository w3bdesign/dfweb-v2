import React from "react"
import { Link } from "gatsby"

import "../../../css/main.css"
import "../../../css/animate.min.css"

import SVGIcons from "../../layout/SVGIcons/SVGIcons.component"

/**
 * Main content that is displayed from index.js
 */

export default function MainContent() {
  return (
    <>
      <main role="main" aria-label="Her kommer hovedinnholdet" id="maincontent">
        <div className="mx-auto mt-16 rounded lg:mt-20 xl:mt-20 bg-graybg shadow-large md:mt-16 sm:mt-64 xs:mt-64">
          <div
            role="article"
            aria-label="Kontainer for animasjoner av introtekst"
            id="main-hero"
            className="flex flex-col justify-center text-lg animate__animated animate__fadeIn animate__delay-1s"
          >
            <div className="p-2 bg-white opacity-75">
              <div className="text-black rounded">
                <section aria-label="Introduksjonstekst">
                  <p className="text-5xl text-center animate__animated animate__fadeInDown animate__delay-2s">
                    Hei!
                  </p>
                  <h1
                    data-cy="daniel"
                    className="px-12 mt-2 text-lg animate__animated animate__fadeInDown animate__delay-3s md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-left xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-2/3 lg:w-2/3 xl:w-full"
                  >
                    Jeg heter Daniel Fjeldstad og er en webutvikler.
                  </h1>
                  <h2 className="px-12 mt-4 text-lg animate__animated animate__fadeInDown animate__delay-4s md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-left xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-2/3 lg:w-2/3 xl:w-full">
                    Jeg kan PHP, mySQL, Wordpress, HTML, CSS, Javascript, Typescript, React,
                    Redux, Docker, Photoshop og mye mer.
                  </h2>
                  <SVGIcons />
                </section>
              </div>
            </div>
          </div>
          <div className="container grid gap-4 p-4 mx-auto mt-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            <div className="p-8 text-lg text-black bg-white rounded shadow">
              <section aria-label="Hovedinnhold om meg">
                <h1 className="text-3xl text-center">Om Meg</h1>
                <p
                  role="article"
                  aria-label="Informasjon om mine ferdigheter"
                  className="mt-6 text-lg"
                >
                  Siden 2000 har jeg arbeidet med HTML, CSS, PHP, mySQL og
                  Javascript. Jeg har arbeidet med WordPress og WooCommerce
                  siden 2011 hvor jeg har arbeidet frilans via Fiverr og kan
                  skilte med 100% positiv tilbakemelding på samtlige oppdrag.
                </p>
                <p
                  role="article"
                  aria-label="Info om open-source bidrag"
                  className="mt-6 text-lg"
                >
                  Har også bidratt til flere open-source prosjekter på Github.
                </p>
                <p
                  role="article"
                  aria-label="Info om andre teknologier jeg har jobbet med"
                  className="mt-6 text-lg"
                >
                  Jeg har også erfaring med andre teknologier som React, moderne
                  Javascript (ES6+), Node.js, Firebase, Context, Redux, Axios,
                  Docker, NextJS, Gatsby, MongoDB, Opencart, Magento med mer.
                </p>
              </section>
            </div>
            <div className="p-8 text-lg text-black bg-white rounded shadow">
              <section aria-label="Github seksjon">
                <h1 className="text-3xl text-center">Prosjekter</h1>
                <p
                  role="article"
                  aria-label="Informasjon om Github og prosjekter"
                  className="mt-6 text-lg"
                >
                  Jeg arbeider jevnlig med hobbyprosjekter.
                  <br />
                  <br />
                  Kildekoden publiserer jeg på
                  {" "}
                  <a
                    className="underline"
                    href="https://github.com/w3bdesign"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </a>
                </p>
                <p className="mt-6 text-lg">
                  På
                  {" "}
                  <Link className="underline" to="/portefølje">
                    {" "}
                    PORTEFØLJE
                    {" "}
                  </Link>
                  kan du se eksempler på arbeid jeg har gjort i 2019 og 2020.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
