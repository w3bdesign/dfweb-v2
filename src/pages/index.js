/*

Inspirational resources: 

https://www.npmjs.com/package/react-scrollmagic

https://www.tailwindtoolbox.com/

https://dev.to/sm0ke/tailwind-css-open-source-components-364h

https://github.com/creativetimofficial/tailwind-starter-kit

https://github.com/framer/motion

//

https://dev.to/sebastianguenther/react-how-to-design-smooth-page-transitions-and-animations-1fii

https://www.youtube.com/watch?v=nqNIy8HkEQ8&app=desktop

*/

import React from "react"

import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"
import FontAwesome from "../components/FontAwesome/FontAwesome"

function IndexPage() {
  return (
    <>
      <div className="">
        <Navbar>
          <NavbarContent />
        </Navbar>
        <div className="container mx-auto rounded">
          <div className="container p-4 mx-auto mt-4 ">
            <div className="p-12 font-sans text-lg text-white rounded bg-hero">
              <p className="text-3xl text-center">Hei!</p>
              <p className="text-lg">
                Jeg heter Daniel Fjeldstad og er en webutvikler som kan PHP,
                mySQL, Wordpress, HTML, CSS, Javascript, React, Redux, Docker og
                mye mer.
              </p>
              <FontAwesome />
            </div>
          </div>
          <div className="grid gap-4 p-4 mt-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1 ">
            <div className="p-12 text-lg text-white rounded bg-hero">
              <p className="text-3xl text-center">Om Meg</p>
              <p className="mt-6 text-lg">
                Siden 2000 har jeg arbeidet med HTML, CSS, PHP, mySQL og
                Javascript. Jeg har arbeidet med Wordpress og Woocommerce siden
                2011 hvor jeg har arbeidet frilans via Fiverr og kan skilte med
                100% positiv tilbakemelding på samtlige oppdrag.
              </p>
              <p className="mt-6 text-lg">
                Har også erfaring med Opencart og Magento.
              </p>
              <p className="mt-6 text-lg">
                Jeg har også erfaring med andre teknologier som React, moderne
                Javascript (ES6+), Node.js, Firebase, Context, Redux, Axios,
                Docker med mer.
                <p className="mt-6 text-lg">
                  På Portefølje kan du se eksempler på arbeid jeg har gjort i
                  2019 og 2020.
                </p>
              </p>
            </div>
            <div className="p-12 text-lg text-white rounded bg-hero">
              <p className="text-3xl text-center">Github / Linkedin</p>
              <p className="mt-6 text-lg">
                Jeg oppdaterer jevnlig min Github konto med nye prosjekter. Hvis
                du er interessert kan du ta en titt HER
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
