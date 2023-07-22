import { SearchYourCode } from '@/components/Home/components'
import { getDataCy, itemsToBeVisible } from '../utils'

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

    cy.get(getDataCy('title'))
      .contains('Need some code for your application?')
  })
})
