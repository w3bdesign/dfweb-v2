import React from "react"
import { Link } from "gatsby"

import FontAwesome from "../FontAwesome/FontAwesome.component"

import heroimage from "../../../static/blue-hero.jpg"

function MainContent() {
  return (
    <>
      <main id="maincontent">
        <div className="mx-auto mt-20 rounded bg-graybg shadow-large">
          <div
            className="flex flex-col justify-center text-lg text-white
            
            "
            style={{
              backgroundImage: `url(${heroimage})`,
              height: "450px",
            }}
          >
            <div className="text-white rounded animate__animated animate__fadeInUp">
              <section>
                <p className="text-5xl text-center">Hei!</p>
                <p
                  data-cy="daniel"
                  className="p-12 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-left md:text-left xl:text-2xl lg:text-xl md:text-xl md:mx-auto md:w-2/3 lg:w-2/3 xl:w-full"
                >
                  Jeg heter Daniel Fjeldstad og er en webutvikler som kan PHP,
                  mySQL, Wordpress, HTML, CSS, Javascript, React, Redux, Docker
                  og mye mer.
                </p>
                <FontAwesome />
              </section>
            </div>
          </div>
          <div className="container grid gap-4 p-4 mx-auto mt-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            <div className="p-8 text-lg text-black bg-white rounded shadow-lg">
              <section>
                <h1 className="text-3xl text-center">Om Meg</h1>
                <p className="mt-6 text-lg">
                  Siden 2000 har jeg arbeidet med HTML, CSS, PHP, mySQL og
                  Javascript. Jeg har arbeidet med Wordpress og Woocommerce
                  siden 2011 hvor jeg har arbeidet frilans via Fiverr og kan
                  skilte med 100% positiv tilbakemelding på samtlige oppdrag.
                </p>
                <p className="mt-6 text-lg">
                  Har også erfaring med Opencart og Magento.
                </p>
                <p className="mt-6 text-lg">
                  Jeg har også erfaring med andre teknologier som React, moderne
                  Javascript (ES6+), Node.js, Firebase, Context, Redux, Axios,
                  Docker, NextJS, Gatsby med mer.
                </p>
                <p className="mt-6 text-lg">
                  På Portefølje kan du se eksempler på arbeid jeg har gjort i
                  2019 og 2020.
                </p>
              </section>
            </div>
            <div className="p-8 text-lg text-black bg-white rounded shadow-lg">
              <section>
                <h1 className="text-3xl text-center">Prosjekter</h1>
                <p className="mt-6 text-lg">
                  Jeg arbeider jevnlig med hobbyprosjekter. Prosjektene baserer
                  seg primært på Javascript, React, HTML og CSS, men jeg
                  arbeider også med Docker, PHP, Wordpress, MongoDB og mySQL.
                  <br />
                  <br />
                  Kildekoden publiserer jeg på{" "}
                  <a
                    className="underline"
                    href="https://github.com/w3bdesign"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </a>
                  <br />
                  <br />
                  Hvis du er interessert i min portefølje kan du ta en titt{" "}
                  <Link className="underline" to="/portefølje">
                    HER
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default MainContent
