import getDataCy from './get-data-cy'

function clickButton(dataCy: string) {
  cy.get(getDataCy(dataCy)).click()
}

export default clickButton
