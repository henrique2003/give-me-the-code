import { Home } from '@/components/modules'
import { itemToBeVisible } from '../utils'

describe('<Home />', () => {
  beforeEach(() => {
    cy.mount(<Home />)
  })

  it('renders', () => {
    itemToBeVisible('search-your-code')
  })
})
