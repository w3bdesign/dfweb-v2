import { Selector } from "testcafe"
import percySnapshot from "@percy/testcafe"

const prosjektSelect = Selector("#kategorifilter")
const prosjektOption = prosjektSelect.find("option")

fixture`Check that category filter works`.page`http://localhost:8000/prosjekter`

test(`Select Vue from the category filter and check that the value changes`, async (test) => {
  await test
    .wait(2000)
    .click(prosjektSelect)
    .click(prosjektOption.withText("Vue"))
    .expect(prosjektSelect.value)
    .eql("Vue")
  await percySnapshot(test, "Clicked on Vue")
})

test(`Select Vue and check that the header content changes`, async (test) => {
  await test
    .click(prosjektSelect)
    .click(prosjektOption.withText("Vue"))
    .wait(2000)
    .expect(Selector("#categoryFilterDiv").innerText)
    .eql("Vue")
  await percySnapshot(test, "Showing Vue projects")
})
