import React from "react"

import FontAwesome from "../../layout/FontAwesome/FontAwesome.component"
import heroimage from "../../../assets/blue-hero.jpg"

/**
 * Sample design I am experimenting with
 */

export default function Design1Content() {
  return (
    <>
      <main id="maincontent">
        <div className="invisible mx-auto rounded shadow-md">
          <div
            className="flex flex-col justify-center text-lg text-white"
            style={{ backgroundImage: `url(${heroimage})`, height: "450px" }}
          >
            <div className="text-white rounded">
              <section>
                <p className="text-5xl text-center">Hei!</p>
                <p className="p-12 text-lg md:p-0 lg:p-0 xl:p-0 xl:text-center lg:text-center md:text-center xl:text-2xl lg:text-xl md:text-xl xs:">
                  Jeg heter Daniel Fjeldstad og er en webutvikler som kan PHP,
                  mySQL, Wordpress, HTML, CSS, Javascript, React, Redux, Docker
                  og mye mer.
                </p>
                <FontAwesome />
              </section>
            </div>
          </div>
          <div className="grid gap-4 mx-auto mt-6 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">
            <div className="p-6 text-lg text-black bg-white rounded shadow">
              <section className="container mx-auto">
                <p className="text-3xl text-center">Om Meg</p>
                <p className="mt-6 text-lg text-left">
                  Siden 2000 har jeg arbeidet med HTML, CSS, PHP, mySQL og
                  Javascript.
                  <br />
                  Jeg har arbeidet med Wordpress og Woocommerce siden 2011 hvor
                  jeg har arbeidet frilans via Fiverr og kan skilte med 100%
                  positiv tilbakemelding på samtlige oppdrag.
                </p>

                <p className="mt-6 text-lg text-left">
                  Har også erfaring med Opencart og Magento.
                </p>
                <p className="mt-6 text-lg text-left">
                  Jeg har også erfaring med andre teknologier som React, moderne
                  Javascript (ES6+), Node.js, Firebase, Context, Redux, Axios,
                  Docker med mer.
                </p>
                <p className="mt-6 text-lg text-left">
                  På Portefølje kan du se eksempler på arbeid jeg har gjort i
                  2019 og 2020.
                </p>
              </section>
            </div>
            <div className="p-6 text-lg text-black bg-white rounded shadow">
              <section className="container mx-auto">
                <p className="text-3xl text-center">Github</p>
                <p className="mt-6 text-lg text-left">
                  Jeg oppdaterer jevnlig min Github konto med nye prosjekter.
                  <br />
                  <br />
                  Hvis du er interessert kan du ta en titt
                  {" "}
                  <a
                    className="underline"
                    href="https://github.com/w3bdesign"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HER
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
