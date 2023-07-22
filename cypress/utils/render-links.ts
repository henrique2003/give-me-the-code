import getDataCy from './get-data-cy'

export interface ILink {
  dataCy: string
  link: string
}

function renderLinks(links: ILink[]): void {
  links.map(({
    dataCy,
    link
  }) => {
    cy.get(getDataCy(dataCy))
      .should('have.attr', 'href')
      .and('equal', link)
  })
}

export default renderLinks
