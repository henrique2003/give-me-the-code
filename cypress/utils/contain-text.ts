import getDataCy from './get-data-cy'

function containText(dataCy: string, text: string): void {
  cy.get(getDataCy(dataCy))
    .contains(text)
}

export default containText
