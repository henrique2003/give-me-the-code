import { Logo } from '@/components'
import { getDataCy } from '../utils'

describe('<Logo />', () => {
  beforeEach(() => {
    cy.mount(<Logo />)
  })

  it('renders', () => {
    // Logo
    cy.contains(getDataCy('logo'), '<GiveMeTheCode />')
      .should('be.visible')
  })
})
