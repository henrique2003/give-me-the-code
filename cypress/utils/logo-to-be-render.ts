import getDataCy from './get-data-cy'

function logoToBeRender(): void {
  cy.contains(getDataCy('logo'), '<GiveMeTheCode />')
    .should('be.visible')
}

export default logoToBeRender
