import { Navigation } from '@/components'
import { getDataCy, setMobileViewport } from '../utils'

describe('<Navigation />', () => {
  beforeEach(() => {
    cy.mount(<Navigation />)
  })

  it('renders', () => {
    cy.get(getDataCy('navbar'))
      .should('be.visible')

    cy.get(getDataCy('aside'))
      .should('be.visible')
  })

  it('should open aside when click aside-button on mobile render', () => {
    setMobileViewport()

    cy.get(getDataCy('aside-button')).click()

    cy.get(getDataCy('aside'))
      .should('have.css', 'left', '0px')
  })

  it('should close aside when toggle click aside-button on mobile render', () => {
    setMobileViewport()

    cy.get(getDataCy('aside-button')).click().click()

    cy.get(getDataCy('aside'))
      .should('have.css', 'left', '-400px')
  })
})
