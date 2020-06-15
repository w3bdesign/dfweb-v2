import React from "react"

function KontaktContent() {
  return (
    <>
      <main id="maincontent">
        <div className="mt-24 bg-graybg">
          <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
            <div className="container mx-auto bg-white rounded shadow-lg">
              <div className="p-4 mx-auto mt-4">
                <div className="p-4 text-lg rounded">
                  <h3 className="m-2 text-3xl text-center text-black">
                    Kontakt
                  </h3>
                  <form
                    className="text-center"
                    name="kontaktskjema"
                    method="POST"
                    data-netlify="true"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="kontaktskjema"
                    />
                    <fieldset>
                      <label className="text-black" htmlFor="text">
                        Fullt navn
                        <br />
                        <input
                          className="w-64 p-2 m-2 placeholder-black border border-gray-500 rounded focus:shadow-outline"
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
                      <label className="text-black" htmlFor="phone">
                        Telefonnummer
                        <br />
                        <input
                          className="w-64 p-2 m-2 placeholder-black border border-gray-500 rounded focus:shadow-outline"
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
                      <label className="text-black" htmlFor="textarea">
                        Hva ønsker du å si?
                        <br />
                        <textarea
                          className="w-64 p-2 m-2 placeholder-black border border-gray-500 rounded focus:shadow-outline"
                          name="tekst"
                          id="textarea"
                          required="true"
                          aria-required="true"
                        ></textarea>
                      </label>
                    </fieldset>
                    <button
                      type="submit"
                      className="p-4 m-4 text-white rounded bg-button hover:shadow-outline hover:bg-gray-700"
                    >
                      Send skjema
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div id="kontakt-filler" className="mt-48">
            <br />
            <br />
          </div>
        </div>
      </main>
    </>
  )
}

export default KontaktContent
