import React from "react"

function MainContent() {
  return (
    <>
      <div className="container mx-auto rounded">
        <div className="p-4 mx-auto mt-4 ">
          <div className="p-12 font-sans text-lg text-white rounded bg-hero">
            <p className="text-lg">Kontakt</p>
          </div>
        </div>
        <div className="p-4 mx-auto mt-4 ">
          <div className="p-12 font-sans text-lg text-white rounded bg-hero">
            <form
              name="kontaktskjema"
              method="POST"
              data-netlify="true"
              className="pure-form"
              netlify-honeypot="bot-field"
            >
              <fieldset className="pure-group">
                <h4>Vennligst fyll ut skjemaet under</h4>
                <label htmlFor="text">
                  Fullt navn
                  <br />
                  <input
                    id="text"
                    name="navn"
                    type="text"
                    placeholder="Fullt navn"
                    required="true"
                    aria-required="true"
                  />
                </label>

                <label htmlFor="phone">
                  Telefon (uten mellomrom)
                  <br />
                  <input
                    id="phone"
                    name="telefon"
                    type="text"
                    placeholder="Telefon"
                    required="true"
                    aria-required="true"
                    pattern=".[0-9]{7}"
                  />
                </label>
              </fieldset>
              <fieldset className="pure-group">
                <label htmlFor="textarea">
                  Hva ønsker du å si?
                  <br />
                  <textarea
                    name="tekst"
                    id="textarea"
                    required="true"
                    aria-required="true"
                  ></textarea>
                </label>
              </fieldset>
              <button type="submit" className="button">
                Send skjema
              </button>
              <br />
              &nbsp;
              <label style={{ position: "absolute", display: "none" }}>
                Don’t fill this out if you are human: <input name="bot-field" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent
