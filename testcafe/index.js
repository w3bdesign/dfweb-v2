import { Selector, fixture } from "testcafe"

// eslint-disable-next-line no-unused-expressions
fixture`Check main page text`.page`http://localhost:8000/`

test("Verify text on front page", async (test) => {
  await test
    .expect(Selector("#daniel").innerText)
    .eql("Jeg heter Daniel Fjeldstad og er en webutvikler.")
})
