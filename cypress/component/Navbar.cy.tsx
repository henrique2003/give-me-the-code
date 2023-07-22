import Navbar from '../../src/components/Navbar/index'
import { actionLinks, navLinks } from '../mocks/navbar'
import { getDataCy, setMobileViewport } from '../utils'

describe('<Navbar />', () => {
  beforeEach(() => {
    const handleOpenAside = cy.stub().as('handleOpenAside')

    cy.mount(<Navbar handleOpenAside={handleOpenAside} />)
  })

  it('web renders', () => {
    // Logo
    cy.contains(getDataCy('logo'), '<GiveMeTheCode />')
      .should('be.visible')

    // Nav links
    navLinks.map(({
      dataCy,
      textName,
      link
    }) => {
      cy.get(getDataCy(dataCy))
        .contains(textName)
        .should('have.attr', 'href')
        .and('equal', link)
    })

    // Actions links
    actionLinks.map(({
      dataCy,
      link
    }) => {
      cy.get(getDataCy(dataCy))
        .should('have.attr', 'href')
        .and('equal', link)
    })

    // Actions icons
    cy.get(getDataCy('login-icon'))
      .should('be.visible')
    cy.get(getDataCy('cart-icon'))
      .should('be.visible')

    // Aside button
    cy.get(getDataCy('aside-button'))
      .should('not.be.visible')
    cy.get(getDataCy('aside-button-icon'))
      .should('not.be.visible')
  })

  it('responsive renders', () => {
    setMobileViewport()

    // Logo
    cy.contains(getDataCy('logo'), 'GiveMeTheCode')
      .should('be.visible')

    // Nav links
    navLinks.map((navLinkItem) => {
      cy.get(getDataCy(navLinkItem.dataCy))
        .contains(navLinkItem.textName)
        .should('not.be.visible')
    })

    // Aside button
    cy.get(getDataCy('aside-button'))
      .should('be.visible')
    cy.get(getDataCy('aside-button-icon'))
      .should('be.visible')
  })

  it('should call handleOpenAside function correctly', () => {
    setMobileViewport()

    cy.get(getDataCy('aside-button')).click()

    cy.get('@handleOpenAside')
      .should('be.called')
  })
})
