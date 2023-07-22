import Navbar from '../../src/components/Navbar/index'
import { actionLinks, navLinks } from '../mocks/navbar'
import { clickButton, getDataCy, itemsNotToBeVisible, itemsToBeVisible, setMobileViewport } from '../utils'

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
    itemsToBeVisible([
      'login-icon',
      'cart-icon'
    ])

    // Aside button
    itemsNotToBeVisible([
      'aside-button',
      'aside-button-icon'
    ])
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
    itemsToBeVisible([
      'aside-button',
      'aside-button-icon'
    ])
  })

  it('should call handleOpenAside function correctly', () => {
    setMobileViewport()

    clickButton('aside-button')

    cy.get('@handleOpenAside')
      .should('be.called')
  })
})
