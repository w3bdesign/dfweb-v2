import { Selector } from "testcafe"
import percySnapshot from "@percy/testcafe"

// https://docs.percy.io/docs/testcafe
// https://dev-tester.com/percy-and-testcafe-stop-letting-visual-bugs-slip-by-you/

// eslint-disable-next-line no-unused-expressions
fixture`Check main page text`.page`http://localhost:8000/`

test("Verify text in Hero section", async (test) => {
  await test
    .expect(Selector("#daniel").innerText)
    .eql("Jeg heter Daniel Fjeldstad og er en webutvikler.")
    .wait(2000)
  await percySnapshot(test, "Loaded frontpage")
})
