import getDataCy from './get-data-cy'

export function asideToBeClose(): void {
  cy.get(getDataCy('aside'))
    .should('have.css', 'left', '-400px')
}

export function asideToBeOpen(): void {
  cy.get(getDataCy('aside'))
    .should('have.css', 'left', '0px')
}
