import React from "react"

function MainContent() {
  return (
    <>
      <div className="container mx-auto rounded">
        <div className="p-4 mx-auto mt-4">
          <div className="p-6 font-sans text-lg rounded bg-hero">
            <h3 className="m-2 text-3xl text-center text-white">Kontakt</h3>
            <form
              className="text-center"
              name="kontaktskjema"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="kontaktskjema" />
              <fieldset>
                <label className="text-white" htmlFor="text">
                  Fullt navn
                  <br />
                  <input
                    className="p-2 m-2 text-black rounded focus:shadow-outline"
                    id="text"
                    name="navn"
                    type="text"
                    placeholder="Fullt navn"
                    required="true"
                    aria-required="true"
                  />
                </label>
                </fieldset>
                <fieldset>
                <label className="text-white" htmlFor="phone">
                Telefonnummer
                  <br />
                  <input
                    className="p-2 m-2 text-black rounded focus:shadow-outline"
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
              <fieldset>
                <label className="text-white" htmlFor="textarea">
                  Hva ønsker du å si?
                  <br />
                  <textarea
                    className="p-2 m-2 text-black rounded focus:shadow-outline"
                    name="tekst"
                    id="textarea"
                    required="true"
                    aria-required="true"
                  ></textarea>
                </label>
              </fieldset>
              <button type="submit" className="p-4 m-4 text-white rounded bg-button hover:shadow-outline">
                Send skjema
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent
