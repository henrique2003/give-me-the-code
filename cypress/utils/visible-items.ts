import getDataCy from './get-data-cy'

export function itemsToBeVisible(items: string[]): void {
  items.map(item => {
    cy.get(getDataCy(item))
      .should('be.visible')
  })
}

export function itemsNotToBeVisible(items: string[]): void {
  items.map(item => {
    cy.get(getDataCy(item))
      .should('not.be.visible')
  })
}
