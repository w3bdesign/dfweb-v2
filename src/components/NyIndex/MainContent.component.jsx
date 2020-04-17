import React from "react"
import FontAwesome from "../FontAwesome/FontAwesome"

import hero from "../../../static/blue-hero.jpg"

function MainContent() {
  return (
    <>
      <div className="mx-auto rounded shadow-large">
        <div className="mx-auto">
          <div
            className="flex flex-col justify-center pr-16 text-lg text-white rounded"
            style={{ backgroundImage: `url(${hero})`, height: "450px" }}
          >
            <div className="text-center ">
              <p className="text-5xl">Hei!</p>
              <p className="mt-4 text-3xl">
                Velkommen til porteføljen til Daniel Fjeldstad
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="container max-w-4xl p-4 m-4 mx-auto text-lg text-left text-black bg-gray-100 rounded shadow-lg">
            <p className="mt-4 text-3xl text-center">Om Meg</p>
            <p className="mx-auto mt-6">
              Jeg heter Daniel Fjeldstad og er en webutvikler som kan:
              <br />
              PHP, mySQL, Wordpress, HTML, CSS, Javascript, React, Redux, Docker
              og mye mer.
            </p>
            <FontAwesome className="m-8" />
            <p className="mx-auto mt-6">
              Siden 2000 har jeg arbeidet med HTML, CSS, PHP, mySQL og
              Javascript.
              <br />
              Jeg har arbeidet med Wordpress og Woocommerce siden 2011 hvor jeg
              har arbeidet frilans via Fiverr og kan skilte med 100% positiv
              tilbakemelding på samtlige oppdrag.
              <br />
              Har også erfaring med Opencart og Magento.
            </p>

            <p className="mx-auto mt-6">
              Jeg har også erfaring med andre teknologier som React, moderne
              Javascript (ES6+), Node.js, Firebase, Context, Redux, Axios,
              Docker med mer.
              <br />
              På Portefølje kan du se eksempler på arbeid jeg har gjort i 2019
              og 2020.
            </p>
            <p className="p-4 m-4 text-3xl text-center">Github</p>
            <p className="mt-6">
              Jeg oppdaterer jevnlig min Github konto med nye prosjekter.
              <br />
              Hvis du er interessert kan du ta en titt{" "}
              <a
                className="underline"
                href="https://github.com/w3bdesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                HER
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent
