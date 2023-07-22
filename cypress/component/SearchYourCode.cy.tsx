import { SearchYourCode } from '@/components/Home/components'
import { containText, itemsToBeVisible } from '../utils'

const visibleItems = [
  'search-your-code',
  'input-container',
  'input',
  'icon'
]

describe('<SearchYourCode />', () => {
  beforeEach(() => {
    cy.mount(<SearchYourCode />)
  })

  it('renders', () => {
    itemsToBeVisible(visibleItems)

    containText('title', 'Need some code for your application?')
  })
})
