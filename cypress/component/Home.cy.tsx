import { Home } from '@/components'
import { itemToBeVisible } from '../utils'

describe('<Home />', () => {
  beforeEach(() => {
    cy.mount(<Home />)
  })

  it('renders', () => {
    itemToBeVisible('search-your-code')
  })
})
