import Navbar from '../../src/components/core/navbar/index'
import { actionLinks, navLinks } from '../mocks/navbar'
import { clickButton, getDataCy, itemsNotToBeVisible, itemsToBeVisible, logoToBeRender, renderLinks, setMobileViewport } from '../utils'

describe('<Navbar />', () => {
  beforeEach(() => {
    const handleToggleAside = cy.stub().as('handleToggleAside')

    cy.mount(<Navbar handleToggleAside={handleToggleAside} />)
  })

  it('web renders', () => {
    // Logo
    logoToBeRender()

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
    renderLinks(actionLinks)

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
    logoToBeRender()

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

  it('should call handleToggleAside function correctly', () => {
    setMobileViewport()

    clickButton('aside-button')

    cy.get('@handleToggleAside')
      .should('be.called')
  })
})
