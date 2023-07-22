import { Home } from '@/components'
import { getDataCy } from '../utils'

describe('<Home />', () => {
  beforeEach(() => {
    cy.mount(<Home />)
  })

  it('renders', () => {
    cy.get(getDataCy('search-your-code'))
      .should('be.visible')
  })
})
