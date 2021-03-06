import { Selector } from "testcafe"
// At the top of your test file
import percySnapshot from '@percy/testcafe';

// https://docs.percy.io/docs/testcafe
// https://dev-tester.com/percy-and-testcafe-stop-letting-visual-bugs-slip-by-you/


// eslint-disable-next-line no-unused-expressions
fixture`Check main page text`.page`http://localhost:8000/`

test("Verify text on front page", async (test) => {
  await test
   // .expect(Selector("#daniel").innerText)
   // .eql("Jeg heter Daniel Fjeldstad og er en webutvikler.")
   .pressKey("enter")

   await percySnapshot(test, "Created a todo");



})
