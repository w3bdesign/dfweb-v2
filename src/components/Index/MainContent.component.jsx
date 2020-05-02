import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

import FontAwesome from "../FontAwesome/FontAwesome.component"

import { TimelineLite, TweenMax, Power3 } from "gsap"

import heroimage from "../../../static/blue-hero.webp"

function MainContent() {
  // GSAP animations
  let app = useRef(null)
  let heroRef = useRef(null)
  let heroContent = useRef(null)
  let omMeg = useRef(null)

  let timeline = new TimelineLite({ delay: 0.2 })

  useEffect(() => {
    const firstHeroContent = heroContent.children[0]
    const secondHeroContent = heroContent.children[1]
    const thirdHeroContent = heroContent.children[2]

    const ommegContent = omMeg.children[0]
    const ommegContent2 = omMeg.children[1]

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } })

    /*
     timeline.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
    */

    timeline.from(heroRef, 2.0, { y: 1280, ease: Power3.easeOut }, "Start")

    timeline.from(
      firstHeroContent,
      1,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      1.2,
      "Start"
    )
    timeline.from(
      secondHeroContent,
      1,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      1.4,
      "Start"
    )
    timeline.from(
      thirdHeroContent,
      1,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      1.6,
      "Start"
    )

    timeline.from(
      ommegContent,
      1,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      1.8,
      "Start"
    )
    timeline.from(
      ommegContent2,
      1,
      { y: 20, opacity: 0, ease: Power3.easeOut },
      2.0,
      "Start"
    )
  }, [timeline])

  return (
    <>
      <main id="maincontent">
        <div
          ref={(el) => (app = el)}
          className="invisible mx-auto rounded bg-graybg shadow-large"
        >
          <div
            ref={(el) => (heroRef = el)}
            className="flex flex-col justify-center text-lg text-white"
            style={{ backgroundImage: `url(${heroimage})`, height: "450px" }}
          >
            <div
              ref={(el) => (heroContent = el)}
              className="text-white rounded"
            >
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
          <div
            ref={(el) => (omMeg = el)}
            className="container grid gap-4 p-4 mx-auto mt-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1"
          >
            <div className="p-8 text-lg text-black bg-white rounded shadow-lg">
              <section>
                <p className="text-3xl text-center">Om Meg</p>
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
                  Docker med mer.
                </p>
                <p className="mt-6 text-lg">
                  På Portefølje kan du se eksempler på arbeid jeg har gjort i
                  2019 og 2020.
                </p>
              </section>
            </div>
            <div className="p-8 text-lg text-black bg-white rounded shadow-lg">
              <section>
                <p className="text-3xl text-center">Prosjekter</p>
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
