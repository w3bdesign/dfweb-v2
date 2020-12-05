/* eslint-disable no-shadow */
import React from "react"
import { Link } from "gatsby"

import { animated, useTrail, interpolate } from "react-spring"

import "../../../css/main.css"
import "../../../css/animate.min.css"

import SVGIcons from "../../layout/SVGIcons/SVGIcons.component"

import TEXTLIST from "../../../constants/TEXTLIST"

/**
 * Main content that is displayed from index.js
 */

export default function MainContent() {
  const [trail] = useTrail(TEXTLIST.length, () => ({
    config: {
      mass: 1,
      tension: 180,
      friction: 32,
    },
    opacity: 1,
    x: "0%",
    y: "0px",
    skewX: 0,
    from: {
      opacity: 0,
      x: "0%",
      y: "-200px",
      skewX: 10,
    },
  }))

  return (
    <>
      <main role="main" aria-label="Her kommer hovedinnholdet" id="maincontent">
        <div className="mx-auto mt-16 rounded lg:mt-20 xl:mt-20 bg-graybg shadow-large md:mt-16 sm:mt-64 xs:mt-64">
          <div
            role="article"
            aria-label="Kontainer for animasjoner av introtekst"
            id="main-hero"
            className="flex flex-col justify-center text-lg"
          >
            <div className="p-2 mt-4 mb-4 bg-white opacity-75">
              <div className="text-black rounded">
                <section aria-label="Introduksjonstekst">
                  {trail.map(({ x, y, skewX, itemIndex }, index) => (
                    <animated.div
                      key={itemIndex}
                      style={{
                        transform: interpolate(
                          [x, y, skewX],
                          (x, y, skewX) =>
                            `scale(1) translate(${x}, ${y}) skewX(${skewX}deg)`
                        ),
                      }}
                    >
                      {/*
                      Ensure that the first item has a larger text size by checking the index
                      */}
                      {index === 0 && (
                        <p className="text-5xl text-center">
                          {TEXTLIST[index].text}
                        </p>
                      )}
                      {index > 0 && index !== 3 && (
                        <p data-cy="daniel" className="px-6 mt-4 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-center xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-full lg:w-2/3 xl:w-full">
                          {TEXTLIST[index].text}
                        </p>
                      )}
                      {index === 3 && <SVGIcons />}
                    </animated.div>
                  ))}
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
                  Siden 2000 har jeg arbeidet med webutvikling. Jeg har arbeidet
                  med WordPress og WooCommerce siden 2011 hvor jeg har arbeidet
                  frilans via Fiverr og kan skilte med 100% positiv
                  tilbakemelding på samtlige oppdrag.
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
                  Jeg har også erfaring med andre teknologier som moderne
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
                  <Link className="underline" to="/prosjekter">
                    {" "}
                    PROSJEKTER
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
